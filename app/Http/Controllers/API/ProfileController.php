<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\BaseController as BaseController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProfileController extends BaseController
{
    public function show()
    {
        $item = User::with('professor.knowledges', 'student')->findOrFail(auth()->id());
        return $this->sendResponse($item);

    }

    public function update(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'email' => 'required|unique:users,email,' . auth()->id(),
            'phone' => 'required',
            'password' => 'nullable|confirmed',
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

}
