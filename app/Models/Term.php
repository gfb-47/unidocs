<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Term extends Model
{
    protected $fillable = ['name', 'original_directory', 'file_directory', 'process_id'];

    protected $appends = ['full_link'];

    public function getFullLinkAttribute()
    {
        $directory = $this->file_directory == null ? $this->original_directory : $this->file_directory;
        return asset('storage/' . $directory);
    }
    public function process()
    {
        return $this->belongsTo(Process::class, 'process_id');
    }

    public function sign()
    {
        return $this->belongsToMany(User::class, 'signed_terms', 'term_id', 'user_id')
            ->withPivot('id')
            ->withTimestamps();
    }
}