<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Professor;
use Illuminate\Http\Request;

class ProfessorController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=Professor::select("professors.*", "users.name", "users.email", "users.phone")
        ->join("users", "users.id", "=", "professors.user_id")->orderBy("users.name")->get();
        return $this->sendResponse($data);
    }
}
