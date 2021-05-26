<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Term;
use App\Models\User;
use Illuminate\Http\Request;

class TermController extends BaseController
{
    public function index(Request $request, $process_id)
    {
        $user = User::with('student', 'professor')->find($request->header()['user'][0]);

        $data = Term::select('terms.*')
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
}