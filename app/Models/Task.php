<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'project_id',
        'title',
        'description',
        'hours'
    ];

    public function proposals():BelongsToMany
    {
        return $this->belongsToMany(Proposal::class, 'proposals_tasks', 'task_id', 'proposal_id');
    }

    public function service(): BelongsTo
    {
        return $this->BelongsTo(Client::class);
    }
}
