<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    protected $fillable = ['name', 'directory', 'process_id'];

    public function process()
    {
        return $this->belongsTo(Process::class, 'process_id');
    }

    public function sign()
    {
        return $this->belongsToMany(User::class, 'signed_terms', 'term_id', 'user_id')
            ->withTimestamps();
    }
}