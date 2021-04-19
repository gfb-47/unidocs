<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $data=Student::with("user")->orderBy("cpf")->get();
        $data=Student::select("students.*", "users.name", "users.email", "users.phone")
        ->join("users", "users.id", "=", "students.user_id")->orderBy("users.name")->get();
        return $this->sendResponse($data);
    }
}
