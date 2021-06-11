<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Process;
use App\Models\Student;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Student::select("users.cpf", "users.id", "users.name", "users.color", "users.email", "users.active", "users.phone", "users.updated_at")
            ->join("users", "users.id", "=", "students.user_id")->orderBy("users.name")->get();
        return $this->sendResponse($data);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function changeStatus($id)
    {
        try {
            DB::beginTransaction();
            $data = User::with('Student')->find($id);

            $data->active = !($data->active);

            $data->save();
            DB::commit();
            return $this->sendResponse($data, 'Usuario desativado com Sucesso');
        } catch (Exception $e) {
            DB::rollBack();
            return $this->sendError('Sql Transaction Error', $e->getMessage(), 500);
        }
    }
}