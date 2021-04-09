<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    protected $fillable = [
        'name', 'active', 'subject_id','course_id'
    ];

    public function students() {
        return $this->belongsToMany(Student::class, 'semester_students', 'semester_id', 'student_id');
    }
}
