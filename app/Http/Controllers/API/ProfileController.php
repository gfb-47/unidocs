<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProfileController extends BaseController
{

    public function show(Request $request)
    {

        $item = User::with('professor.knowledges', 'student')->findOrFail(auth()->id());
        return $this->sendResponse($item);
    }

    public function update(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'phone' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }

        try {
            $inputs = $request->except('knowledgeareas');
            $inputs['password'] = bcrypt($request->password);
            $item = User::with('professor')->findOrFail(auth()->id());
            $item->fill($inputs);

            if ($item->professor != null) {
                if (array_key_exists('knowledgeareas', $request->all())) {
                    $item->professor->knowledges()->sync($request->knowledgeareas);
                }
            }

            $item->save();

            return $this->sendResponse([], 'Profile Updated with success');
        } catch (Exception $e) {
            return $this->sendError('Error in update profile', $e->getMessage());
        }
    }

    public function updatePhone(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'phone' => 'required',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }

        try {
            $inputs = $request->except('knowledgeareas');
            $item = User::with('professor')->findOrFail(auth()->id());
            $item->fill($inputs);
            $item->save();

            if ($item->professor != null) {
                if (array_key_exists('knowledgeareas', $request->all())) {
                    $item->professor->knowledges()->sync($request->knowledgeareas);
                }
            }

            return $this->sendResponse([], 'Profile Updated with success');
        } catch (Exception $e) {
            return $this->sendError('Error in update profile', $e->getMessage());
        }
    }

    public function updatePassword(Request $request)
    {
        $inputs = $request->all();
        $validate = Validator::make($inputs['data'], [
            'password' => 'required|confirmed',
        ]);
        if ($validate->fails()) {
            return $this->sendError('Error on validating', $validate->errors(), 400);
        }

        try {
            $inputs['password'] = bcrypt($inputs['data']['password']);
            $item = User::with('professor')->findOrFail(auth()->id());
            $item->fill($inputs);
            $item->save();

            return $this->sendResponse([], 'Profile Updated with success');
        } catch (Exception $e) {
            return $this->sendError('Error in update profile', $e->getMessage());
        }
    }
}
