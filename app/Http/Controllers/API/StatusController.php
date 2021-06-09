<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Models\Process;
use App\Models\User;

class StatusController extends BaseController
{
    
    public function toSemesterProfessor ($id, Request $request) {
        
        $process = Process::findOrFail($id);
        $process->status = 2;
        $process->advise_professor_id = $request->professor_id;
        $process->save();
        //alguem muda essa mensagem depois
        return $this->sendResponse([], 'Sent to semester professor');
    }

    public function acceptOrientation ($id) {
        $process = Process::findOrFail($id);
        $process->status = 3;
        $process->save();
        return $this->sendResponse([], 'The project was approved');
    }

    public function rejectOrientation ($id, Request $request) {
        
        $process = Process::findOrFail($id);
        $process->status = 1;
        //$request->justify mandar email
        $process->save();

        return $this->sendResponse([], 'The project was rejected');
    }

    public function toDefense($id){
        $process = Process::findOrFail($id);
        $process->status = 4;
        //mandar email
        $process->save();
        return $this->sendResponse([], 'The project was send to defense');
    }

    public function ratingProcess($id, Request $request){
        $process = Process::findOrFail($id);
        $process->status = 5;
        $process->rating = $request->rating;
        //mandar email
        $process->save();
        return $this->sendResponse([], 'The project was rated');
    }

    public function finalizeProcess($id){
        $process = Process::findOrFail($id);
        $process->status = 6;
        //mandar email
        $process->save();
        return $this->sendResponse([], 'The project was finalized');
    }

}
