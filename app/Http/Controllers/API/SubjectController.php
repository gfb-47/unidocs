<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=Subject::select("subjects.*")->orderBy("subjects.name")->get();
        return $this->sendResponse($data);
    }
}
