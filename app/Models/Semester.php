<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Semester extends Model
{
    protected $fillable = [
        'name', 'active', 'subject_id','course_id', 'professor_id'
    ];

    public function students() {
        return $this->belongsToMany(Student::class, 'semester_students', 'semester_id', 'student_id');
    }
    
    public function professor() {
        return $this->belongsTo(Professor::class, 'professor_id');
    }
    
    public function process() {
        return $this->hasMany(Process::class);
    }
}
