<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Process;
use App\Models\Term;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class TermController extends BaseController
{
    public function index(Request $request, $process_id)
    {
        $user = User::with('student', 'professor')->find($request->header()['user'][0]);

        $data = Term::select('terms.*')
            ->with('sign')
            ->join('processes', 'processes.id', '=', 'terms.process_id')
            ->where('terms.process_id', $process_id)
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

    public function signDocument(Request $request)
    {
        $user_id = $request->header()['user'][0];
        try {
            DB::beginTransaction();

            if ($request->hasFile('file')) {
                $term = Term::with(['sign' => function ($q) use ($user_id) {
                    $q->where('user_id', $user_id);
                }])->find($request->term_id);
                if ($term->file_directory) {
                    Storage::disk('public')->delete($term->file_directory);
                }
                $folder = substr($term->original_directory, 0, strrpos($term->original_directory, '/'));
                $link = $request->file->store($folder, 'public');
                $term->fill(['file_directory' => $link])->save();
                if ($term->sign == null || isset($term->sign)) {
                    $term->sign()->attach($user_id);
                }
            }
            DB::commit();

            return $this->sendResponse([], 'Saved With Sucess');
        } catch (Exception $e) {
            DB::rollback();

            return $this->sendError($e->getMessage());

        }
    }

    public function sendDocument(Request $request)
    {

        try {
            DB::beginTransaction();
            $process = Process::find($request->process_id);
            $link = $request->file->store($process->folder, 'public');
            Term::create([
                'name' => $request->file->getClientOriginalName(),
                'original_directory' => $link,
                'process_id' => $request->process_id,
            ]);
            DB::commit();

            return $this->sendResponse([], 'Saved With Sucess');
        } catch (Exception $e) {
            DB::rollback();

            return $this->sendError($e->getMessage());

        }
    }
}