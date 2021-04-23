<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KnowledgeArea extends Model
{
    
    protected $table = 'knowledge_areas';

    protected $fillable = [
        'name', 'color', 'active', 'course_id'
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
