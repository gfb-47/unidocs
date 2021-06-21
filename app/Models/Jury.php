<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jury extends Model
{

    protected $fillable = ['local', 'hour', 'date', 'rating', 'approved', 'note', 'process_id'];

    public function scopeInfo($query){
        return $query->select('*');
    }

    public function professors()
    {
        return $this->belongsToMany(Professor::class, 'jury_professors', 'jury_id', 'professor_id')->withTimestamps();
    }

}
