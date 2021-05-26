<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    protected $fillable = ['user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function process()
    {
        return $this->hasMany(Process::class);
    }

    public function semester() {
        return $this->belongsTo(Semester::class);
    }

    public function knowledges()
    {
        return $this->belongsToMany(KnowledgeArea::class, 'professor_knowledge_areas', 'professor_id', 'knowledge_area_id');}
}
