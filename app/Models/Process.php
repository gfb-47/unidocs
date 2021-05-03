<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Process extends Model
{
    protected $table = 'processes';

    protected $fillable = [
        'title', 'content', 'status', 'rating', 'student_id', 'advise_professor_id', 'semester_id', 'knowledge_area_id'
    ];

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }
    public function adviseProfessor()
    {
        return $this->belongsTo(Professor::class, 'advise_professor_id');
    }
    public function semester()
    {
        return $this->belongsTo(Semester::class, 'semester_id');
    }
    public function knowledgeArea()
    {
        return $this->belongsTo(KnowledgeArea::class, 'knowledge_area_id');
    }
}
