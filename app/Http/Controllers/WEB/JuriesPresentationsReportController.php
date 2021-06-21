<?php

namespace App\Http\Controllers\WEB;

use App\Http\Controllers\Controller;
use App\Models\Jury;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Http\Request;

class JuriesPresentationsReportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $data = Jury::info()
        ->with('professors.user')
        ->join('processes', 'processes.id', '=', 'juries.process_id')
        ->join('students', 'processes.student_id', '=', 'students.id')
        ->join('users', 'students.user_id', '=', 'users.id')
        ->orderBy('juries.hour', 'asc')
        ->get();

        // dd($data);
        // dd($data[1]->professors[1]->user->name);

        return PDF::loadView('pdf.juries_presentations_report', compact('data'))
            ->setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true, 'tempDir' => public_path(), 'chroot' => public_path()])
            ->setPaper('a4', 'portrat')
            ->stream();
    }
}