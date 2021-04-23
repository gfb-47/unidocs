<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\KnowledgeArea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class KnowledgeAreaController extends BaseController
{

    public function index()
    {
        $data = KnowledgeArea::select("knowledge_areas.*")->orderBy("knowledge_areas.name")->get();
        return $this->sendResponse($data);
    }

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'color' => 'required',
            'course_id' => 'required'
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }

        $inputs = $request->all();
        DB::transaction(function () use ($inputs) {
            KnowledgeArea::create([
                'name' => $inputs['name'],
                'color' => $inputs['color'],
                'course_id' => $inputs['course_id']
            ]);
        });
        return $this->sendResponse([], 'Added with success!');
    }

    public function update($id, Request $request) {
        $validate = Validator::make($request->all(), [
            'name' => 'string|max:50',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }

        $inputs = $request->all();
        DB::transaction(function () use ($inputs, $id) {
            $k_area = KnowledgeArea::findOrFail($id);
            $k_area->fill($inputs);

            $k_area->save();
        });

        return $this->sendResponse([], 'Updated with success!');
    }

    public function destroy($id) {
        DB::transaction(function () use ($id) {
            $k_area = KnowledgeArea::findOrFail($id);
            if($k_area != null) {
                $k_area->delete();
            }
        });
        return $this->sendResponse([], 'Removed with success!');
    }
}
