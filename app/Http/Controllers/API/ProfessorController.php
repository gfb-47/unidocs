<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Professor;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;

class ProfessorController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Professor::select("professors.*", "users.id as user_id", "users.name", "users.email", "users.phone", "users.color", "users.active")
            ->join("users", "users.id", "=", "professors.user_id")->orderBy("users.name")->get();
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
            $data = User::with('Professor')->find($id);

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