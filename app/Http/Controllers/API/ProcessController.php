<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Process;
use App\Models\Term;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProcessController extends BaseController
{

    public function index()
    {
        $data = Process::select("processes.*")->orderBy("processes.title")->get();
        return $this->sendResponse($data);
    }

    public function store(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'title' => 'required|string|max:100',
            'content' => 'required',
            'student_id' => 'required',
            'advise_professor_id' => 'required',
            'semester_id' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }

        $inputs = $request->all();
        DB::transaction(function () use ($inputs) {
            $files = File::files(public_path() . '/defaultdocs');

            $process = Process::create($inputs);
            $unique = uniqid($process->id);
            $directory = "process/{$unique}/{$process->title}";
            Storage::disk('public')->makeDirectory($directory);

            foreach ($files as $file) {

                Storage::disk('public')->put("$directory/{$file->getFileName()}", file_get_contents($file->getRealPath()));
                Term::create([
                    'name' => $file->getFileName(),
                    'directory' => "$directory/{$file->getFileName()}",
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