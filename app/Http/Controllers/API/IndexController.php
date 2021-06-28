<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Process;
use App\Models\User;
use Illuminate\Http\Request;

class IndexController extends BaseController
{
    public function mainStudentProcess(Request $request)
    {
        $user = User::with('student')->find(auth()->id());

        $data = Process::select("processes.*")
            ->with('adviseProfessor.user', 'semester', 'knowledgeAreas', 'student.user')
            ->orderBy("processes.title", 'asc')
            ->orderBy("processes.created_at", 'desc')
            ->where('processes.student_id', $user->student->id)
            ->limit(2)
            ->get();
        return $this->sendResponse($data);
    }

    public function mainAdviseProfessorProcess(Request $request)
    {
        $user = User::with('professor')->find(auth()->id());

        $data = Process::select("processes.*")
            ->with('adviseProfessor.user', 'semester', 'knowledgeAreas', 'student.user')
            ->orderBy("processes.title", 'asc')
            ->orderBy("processes.created_at", 'desc')
            ->where('processes.advise_professor_id', $user->professor->id)
            ->limit(2)
            ->get();
        return $this->sendResponse($data);
    }

    public function mainAdminProcess(Request $request)
    {
        $data = Process::select("processes.*")
            ->with('adviseProfessor.user', 'semester', 'knowledgeAreas', 'student.user')
            ->orderBy("processes.title", 'asc')
            ->orderBy("processes.created_at", 'desc')
            ->limit(2)
            ->get();
        return $this->sendResponse($data);
    }
}