<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\Jury;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class JuryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $data = Jury::with('professors.user')->where('process_id', $request->process_id)->get();

        return $this->sendResponse($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'local' => 'required|string',
            'date' => 'required|date|min:today',
            'hour' => 'required',
            'note' => 'required|string',
            'process_id' => 'required|unique:juries,process_id',
            'professors' => 'required|array|min:3',
            'professors.*' => 'exists:professors,id',
        ]);

        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }
        try {
            DB::beginTransaction();

            $item = Jury::create($request->except('professors'));

            $item->professors()->attach($request->professors);

            DB::commit();

            return $this->sendResponse($item, 'Banca Marcada com Sucesso');
        } catch (Exception $e) {
            DB::rollBack();

            return $this->sendError('Sql Transaction Error', $e->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Jury  $jury
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Jury::with('professors.user')->findOrFail($id);

        return $this->sendResponse($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Jury  $jury
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'local' => 'required|string',
            'date' => 'required|date|min:today',
            'hour' => 'required',
            'note' => 'required|string',
            'professors' => 'required|array|min:3',
            'professors.*' => 'exists:professors,id',
        ]);

        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }
        if ($request->has('process_id')) {
            return $this->sendError('Don`t send the process_id on update juries', $validate->errors(), 213);
        }

        try {
            DB::beginTransaction();
            $item = Jury::findOrFail($id);
            $item->fill($request->except('professors'));
            $item->save();

            $item->professors()->sync($request->professors);

            DB::commit();

            return $this->sendResponse($item, 'Banca Editada com Sucesso');
        } catch (Exception $e) {
            DB::rollBack();

            return $this->sendError('Sql Transaction Error', $e->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Jury  $jury
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $item = Jury::findOrFail($id);
            $item->delete();
            return $this->sendResponse(['Item deletado' => $item], 'Banca Deletada com Sucesso');
        } catch (\Exception $e) {
            return $this->sendError('Erro ao Deletar', $e->getMessage(), 500);
        }
    }
}
