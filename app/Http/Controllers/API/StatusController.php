<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Mail\NotificationProcess;
use App\Models\Process;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Mail;

class StatusController extends BaseController
{

    public function toSemesterProfessor(Request $request, $id)
    {

        $validate = Validator::make($request->all(), [
            'professor_id' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }
        try {
            $process = Process::findOrFail($id);
            $process->status = 2;
            $process->advise_professor_id = $request->professor_id;
            $process->save();

            $student = User::select('users.email', 'users.name')->join('students', 'students.user_id', '=', 'users.id')->where('students.id', $process->student_id)->first();

            $advise_professor = User::select('users.email', 'users.name')->join('professors', 'professors.user_id', '=', 'users.id')->where('professors.id', $process->advise_professor_id)->first();

            $student_message = "Olá {$student->name}, o seu processo: '{$process->title}' teve a indicação do seguinte professor como Orientador: {$advise_professor->name} 🙂, por favor acompanhe o andamento do seu processo pelo botão abaixo";

            $professor_message = "Olá professor {$advise_professor->name}, você possui um projeto pendente de orientação com o seguinte título: {$process->title}, por favor verifique no sistema através do link abaixo 🗿";

            Mail::to($student->email)->queue(new NotificationProcess($student_message, "Definição do professor orientador para o processo {$process->title}."));

            Mail::to($advise_professor->email)->queue(new NotificationProcess($professor_message, "Processo {$process->title} aguardando atualização."));

            return $this->sendResponse([], 'Sent to semester professor');
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function acceptOrientation(Request $request, $id)
    {
        try {
            $validate = Validator::make($request->all(), [
                'confirmed' => 'required|boolean',
            ]);
            if ($validate->fails()) {
                return $this->sendError('Error on validating', $validate->errors(), 400);
            }

            $process = Process::with('semester.professor')->findOrFail($id);
            $process->status = 3;
            $process->save();

            $student = User::select('users.email', 'users.name')->join('students', 'students.user_id', '=', 'users.id')->where('students.id', $process->student_id)->first();

            $advise_professor = User::select('users.email', 'users.name')->where('id', auth()->id())->first();

            $semester_professor = User::select('users.email', 'users.name')
                ->join('professors', 'professors.user_id', '=', 'users.id')
                ->where('professors.id', $process->semester->professor->id)->first();

            $student_message = "Olá {$student->name}, o seu processo: '{$process->title}' foi aceito pelo professor: '{$advise_professor->name} 🎉, prepare-se para iniciar o desenvolvimento. Acompanhe o andamento pelo sistema através do link abaixo'";

            $professor_message = "Olá professor {$semester_professor->name}, o processo '{$process->title}' foi aceito pelo professor: '{$advise_professor->name}'. Acompanhe o andamento pelo sistema através do link abaixo";

            Mail::to($student->email)->queue(new NotificationProcess($student_message, "Resposta do professor orientador sobre o processo: {$process->title}."));

            Mail::to($semester_professor->email)->queue(new NotificationProcess($professor_message, "Professor da Disciplina: Resposta do professor orientador sobre o processo: {$process->title}."));

            return $this->sendResponse([], 'The project was approved');
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function rejectOrientation(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'justify' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }
        try {
            $process = Process::with('semester.professor')->findOrFail($id);
            $process->status = 1;
            $process->save();

            $student = User::select('users.email', 'users.name')->join('students', 'students.user_id', '=', 'users.id')->where('students.id', $process->student_id)->first();

            $advise_professor = User::select('users.email', 'users.name')->where('id', auth()->id())->first();

            $semester_professor = User::select('users.email', 'users.name')
                ->join('professors', 'professors.user_id', '=', 'users.id')
                ->where('professors.id', $process->semester->professor->id)->first();

            $student_message = "Olá {$student->name}, o seu processo: '{$process->title}' foi rejeitado pelo professor: '{$advise_professor->name} 😥, sendo repassada a seguinte justificativa: '{$request->justify}'. Para Novas atualizações acompanhe pelo sistema pelo Link abaixo'";

            $professor_message = "Olá professor {$semester_professor->name}, o processo '{$process->title}' foi rejeitado pelo professor: '{$advise_professor->name}', utilizando a seguinte justificativa:  '{$request->justify}'. Acompanhe o andamento pelo sistema através do link abaixo";

            Mail::to($student->email)->queue(new NotificationProcess($student_message, "Resposta do professor orientador sobre o processo: {$process->title}."));

            Mail::to($semester_professor->email)->queue(new NotificationProcess($professor_message, "Professor da Disciplina: Resposta do professor orientador sobre o processo: {$process->title}."));

            return $this->sendResponse([], 'The project was rejected');
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function toDefense(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'confirmed' => 'required|boolean',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }
        try {
            $process = Process::with('semester.professor')->findOrFail($id);
            $process->status = 4;
            $process->save();

            $student = User::select('users.email', 'users.name')->join('students', 'students.user_id', '=', 'users.id')->where('students.id', $process->student_id)->first();

            $advise_professor = User::select('users.email', 'users.name')->where('id', auth()->id())->first();

            $semester_professor = User::select('users.email', 'users.name')
                ->join('professors', 'professors.user_id', '=', 'users.id')
                ->where('professors.id', $process->semester->professor->id)->first();

            $student_message = "Olá {$student->name}, o seu processo: '{$process->title}' foi definido como apto para defesa pelo professor: '{$advise_professor->name} 🎉, aguarde a montagem da banca. Para Novas atualizações acompanhe pelo sistema pelo Link abaixo'";

            $professor_message = "Olá professor {$semester_professor->name}, o processo '{$process->title}' foi definido como apto para defesa pelo professor: '{$advise_professor->name}', aguardando a montagem da banca pelo mesmo. Acompanhe o andamento pelo sistema através do link abaixo";

            Mail::to($student->email)->queue(new NotificationProcess($student_message, "Atualização no Status do Processo: {$process->title}."));

            Mail::to($semester_professor->email)->queue(new NotificationProcess($professor_message, "Professor da Disciplina: Atualização no status do processo: {$process->title}."));

            return $this->sendResponse([], 'The project was send to defense');
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function ratingProcess(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'rating' => 'required|max:10|min:0',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }
        try {
            $process = Process::findOrFail($id);
            $process->status = 5;
            $process->rating = $request->rating;
            $student = User::select('users.email', 'users.name')->join('students', 'students.user_id', '=', 'users.id')->where('students.id', $process->student_id)->first();

            $advise_professor = User::select('users.email', 'users.name')->where('id', auth()->id())->first();

            $semester_professor = User::select('users.email', 'users.name')
                ->join('professors', 'professors.user_id', '=', 'users.id')
                ->where('professors.id', $process->semester->professor->id)->first();

            $student_message = "Olá {$student->name}, a nota do seu processo: '{$process->title}' foi definido pelo professor: '{$advise_professor->name} 🎉. Para Novas atualizações acompanhe pelo sistema pelo Link abaixo'";

            $professor_message = "Olá professor {$semester_professor->name}, a nota do processo '{$process->title}' foi definida pelo professor: '{$advise_professor->name}'. Acompanhe o andamento pelo sistema através do link abaixo";

            Mail::to($student->email)->queue(new NotificationProcess($student_message, "Nota obtida no Processo: {$process->title}."));

            Mail::to($semester_professor->email)->queue(new NotificationProcess($professor_message, "Professor da Disciplina: Nota definida no processo: {$process->title}."));
            $process->save();
            return $this->sendResponse([], 'The project was rated');
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }

    public function finalizeProcess(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'confirmed' => 'required|boolean',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }
        try {
            $process = Process::findOrFail($id);
            $process->status = 6;

            $student = User::select('users.email', 'users.name')->join('students', 'students.user_id', '=', 'users.id')->where('students.id', $process->student_id)->first();

            $advise_professor = User::select('users.email', 'users.name')->where('id', auth()->id())->first();

            $semester_professor = User::select('users.email', 'users.name')
                ->join('professors', 'professors.user_id', '=', 'users.id')
                ->where('professors.id', $process->semester->professor->id)->first();

            $student_message = "Olá {$student->name}, o seu processo: '{$process->title}' foi finalizado pelo professor: '{$advise_professor->name} 🎉. Para Novas atualizações acompanhe pelo sistema pelo Link abaixo'";

            $professor_message = "Olá professor {$semester_professor->name}, o processo '{$process->title}' foi definido como finalizado pelo professor: '{$advise_professor->name}'. Acompanhe o andamento pelo sistema através do link abaixo";

            Mail::to($student->email)->queue(new NotificationProcess($student_message, "Atualização no Status do Processo: {$process->title}."));

            Mail::to($semester_professor->email)->queue(new NotificationProcess($professor_message, "Professor da Disciplina: Atualização no status do processo: {$process->title}."));

            $process->save();
            return $this->sendResponse([], 'The project was finalized');
        } catch (\Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}