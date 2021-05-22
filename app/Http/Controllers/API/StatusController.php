<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Process;

class StatusController extends BaseController
{
    
    public function toSemesterProfessor ($id) {
        
        $process = Process::findOrFail($id);
        $process->status = 1;
        $process->save();

        return $this->sendResponse([], 'Sent to semester professor');
    }

    public function toAdviseProfessor ($id) {
        
        $process = Process::findOrFail($id);
        $process->status = 2;
        $process->save();

        return $this->sendResponse([], 'Sent to advise professor');
    }

    public function toDevelopment ($id) {
        
        $process = Process::findOrFail($id);
        $process->status = 3;
        $process->save();

        return $this->sendResponse([], 'Sent to the student to develop');
    }

    public function approved ($id) {
        
        $process = Process::findOrFail($id);
        $process->status = 4;
        $process->save();

        return $this->sendResponse([], 'The project was approved');
    }

    public function rejected ($id) {
        
        $process = Process::findOrFail($id);
        $process->status = 5;
        $process->save();

        return $this->sendResponse([], 'The project was rejected');
    }


}
