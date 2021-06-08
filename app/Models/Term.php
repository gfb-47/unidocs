<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    protected $fillable = ['name', 'original_directory', 'file_directory', 'process_id'];

    protected $appends = ['full_link'];

    public function getFullLinkAttribute()
    {
        return asset('storage/' . $this->directory);
    }
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