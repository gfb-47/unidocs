<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jury extends Model
{

    protected $fillable = ['local', 'hour', 'date', 'rating', 'approved', 'note', 'process_id'];


    public function professors()
    {
        return $this->belongsToMany(Professor::class, 'jury_professors', 'jury_id', 'professor_id')->withTimestamps();
    }

    /**
     * Get the user that owns the Jury
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function proccess()
    {
        return $this->belongsTo(Process::class, 'process_id');
    }

}