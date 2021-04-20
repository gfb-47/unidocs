<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController;
use App\Models\Semester;
use Illuminate\Http\Request;

class SemesterController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=Semester::select("semesters.*", "subjects.name as subjectName", "courses.name as courseName", "users.name as professorName")
        ->join("subjects", "subjects.id", "=", "semesters.subject_id")
        ->join("courses", "courses.id", "=", "semesters.course_id")
        ->join("professors", "professors.id", "=", "semesters.professor_id")
        ->join("users", "users.id", "=", "professors.user_id")
        ->orderBy("semesters.name")->get();
        return $this->sendResponse($data);
    }
}
