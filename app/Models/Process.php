<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Process extends Model
{
    protected $table = 'processes';

    protected $fillable = [
        'title', 'content', 'status', 'rating', 'student_id', 'advise_professor_id', 'semester_id',
    ];

    protected $appends = ['status_name'];

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }
    public function jury()
    {
        return $this->hasOne(Jury::class);
    }
    public function adviseProfessor()
    {
        return $this->belongsTo(Professor::class, 'advise_professor_id');
    }
    public function semester()
    {
        return $this->belongsTo(Semester::class, 'semester_id');
    }
    public function knowledgeAreas()
    {
        return $this->belongsToMany(KnowledgeArea::class, 'process_knowledge_areas', 'process_id', 'knowledge_area_id');
    }
    public function terms()
    {
        return $this->hasMany(Term::class);
    }

    public function getStatusNameAttribute()
    {
        return $this->allStatus()[$this->status];
    }

    public static function allStatus()
    {
        return [
            1 => 'Sob Análise do Responsável da Disciplina',
            'Sob Análise do Orientador',
            'Em desenvolvimento',
            'Apto para Defesa',
            'Sob Correção',
            'Finalizado',
        ];
    }

}