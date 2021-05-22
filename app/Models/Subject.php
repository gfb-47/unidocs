<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = [
        'name', 'acronym'
    ];

    public function semesters() {
        return $this->hasMany(Semester::class);
    }
}
