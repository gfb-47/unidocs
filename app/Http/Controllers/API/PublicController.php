<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Professor;

class PublicController extends Controller
{
    public function searchProfessors(Request $request) {
        $query = Professor::join('users', 'users.id', '=', 'professors.user_id')
            ->orderBy('name', 'asc');

        if ($request->has('search')) {
            $query = $query->where('users.name', 'like', '%' . $request->search . '%');
        }

        $cities = $query->select('professors.id', 'users.name')->get();

        return response()->json($cities, 200);
    }
}