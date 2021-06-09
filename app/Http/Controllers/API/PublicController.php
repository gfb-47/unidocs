<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Professor;
use App\Models\User;
use Illuminate\Http\Request;

class PublicController extends Controller
{
    public function searchProfessors(Request $request)
    {
        $query = Professor::join('users', 'users.id', '=', 'professors.user_id')
            ->orderBy('name', 'asc');

        if ($request->has('search')) {
            $query = $query->where('users.name', 'like', '%' . $request->search . '%');
        }

        $cities = $query->select('professors.id', 'users.name')->get();

        return response()->json($cities, 200);
    }

    public function getUsername(Request $request)
    {
        $user = User::select('name')->find($request->header()['user'][0]);
        return response()->json($user, 200);

    }
}