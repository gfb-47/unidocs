<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=Course::select("courses.*")->orderBy("courses.name")->get();
        return $this->sendResponse($data);
    }
}
