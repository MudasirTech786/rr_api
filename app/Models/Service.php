<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];
    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    public function proposals(): BelongsToMany
    {
        return $this->belongsToMany(Proposal::class, 'proposals_services', 'service_id', 'proposal_id');
    }
}
