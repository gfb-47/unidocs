<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';

    protected $fillable = [
        'name', 'active'
    ];

    public function course()
    {
        return $this->belongsTo(KnowledgeArea::class);
    }
}
