<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Process;
use App\Models\Term;
use App\Models\User;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProcessController extends BaseController
{

    public function index(Request $request)
    {
        $user = User::with('student')->find(auth()->id());

        $data = Process::select("processes.*")
            ->with('adviseProfessor.user', 'semester', 'knowledgeAreas', 'student.user')

            ->orderBy("processes.title")
            ->where(function ($q) use ($user) {
                if ($user->student != null) {
                    $q->where('processes.student_id', $user->student->id);
                } else {
                    $q->where('processes.advise_professor_id', $user->professor->id);
                }
            })
            ->get();
        return $this->sendResponse($data);
    }

    public function indexProcessSemesters(Request $request)
    {
        $user = User::with('student')->find(auth()->id());

        $data = Process::select("processes.*")
            ->with('adviseProfessor.user', 'semester', 'knowledgeAreas', 'student.user')
            ->join('semesters', 'semesters.id', '=', 'processes.semester_id')
            ->orderBy("processes.title")
            ->where('semesters.professor_id', $user->professor->id)
            ->get();

        return $this->sendResponse($data);
    }

    public function show(Request $request, $id)
    {
        $user = User::with('student', 'professor')->find(auth()->id());

        $item = Process::select("processes.*", "semesters.professor_id")
            ->with('adviseProfessor.user', 'semester', 'knowledgeAreas', 'jury')
            ->join('semesters', 'semesters.id', '=', 'processes.semester_id')
            ->orderBy("processes.title")
            ->where('processes.id', $id)
            ->where(function ($q) use ($user) {
                if ($user->student != null) {
                    $q->where('processes.student_id', $user->student->id);
                } else {
                    $q->where('semesters.professor_id', $user->professor->id);
                    $q->orWhere('processes.advise_professor_id', $user->professor->id);
                }
            })
            ->first();
        return $this->sendResponse($item);
    }

    public function store(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'title' => 'required|string|max:100',
            'content' => 'required',
            'advise_professor_id' => 'required',
            'semester_id' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }

        $inputs = $request->all();
        $user = User::with('student')->find(auth()->id());
        $inputs['student_id'] = $user->student->id;
        DB::transaction(function () use ($inputs) {
            $files = File::files(public_path() . '/defaultdocs');

            $unique = uniqid(rand());
            $source = array('/', '\\', '?', '*', '<', '>', '"', ':', '|');
            $replace = array('-', '-', '-', '-', '-', '-', '-', '-', '-');
            $folder_name = str_replace($source, $replace, $inputs['title']);
            $directory = "process/{$unique}/{$folder_name}";
            $inputs['folder'] = $directory;
            $process = Process::create($inputs);
            Storage::disk('public')->makeDirectory($directory);

            foreach ($files as $file) {

                Storage::disk('public')->put("$directory/{$file->getFileName()}", file_get_contents($file->getRealPath()));
                Term::create([
                    'name' => $file->getFileName(),
                    'original_directory' => "$directory/{$file->getFileName()}",
                    'process_id' => $process->id,
                ]);
            }
            if (array_key_exists('knowledge_areas', $inputs)) {
                foreach ($inputs['knowledge_areas'] as $value) {
                    $process->knowledgeAreas()->attach($value);
                }
            }
        });
        return $this->sendResponse([], 'Added with success!');
    }

    public function update($id, Request $request)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|string|max:100',
            'content' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }

        $inputs = $request->all();
        DB::transaction(function () use ($inputs, $id) {
            $process = Process::findOrFail($id);
            $process->fill($inputs);
            $process->save();
        });

        return $this->sendResponse([], 'Updated with success!');
    }
}