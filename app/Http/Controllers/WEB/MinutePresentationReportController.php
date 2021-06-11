<?php

namespace App\Http\Controllers\WEB;

use App\Http\Controllers\Controller;
use App\Models\Process;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Http\Request;

class MinutePresentationReportController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $id)
    {
        $data = Process::select('processes.id', 'processes.title', 'processes.rating', 'processes.student_id', 'processes.semester_id', 'processes.advise_professor_id')->with('student.user', 'jury.professors.user', 'adviseProfessor.user', 'semester.course')->find($id);

        return PDF::loadView('pdf.minute_presentation_report', compact('data'))
            ->setOptions(['isHtml5ParserEnabled' => true, 'isRemoteEnabled' => true, 'tempDir' => public_path(), 'chroot' => public_path()])

            ->setPaper('a4', 'portrat')
            ->stream();
    }
}