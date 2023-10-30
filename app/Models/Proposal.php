<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Proposal extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id ',
        'version',
        'date',
        'hours'
    ];

    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    public function tasks(): BelongsToMany
    {
        return $this->belongsToMany(Task::class, 'regions_stores', 'proposal_id','task_id');
    }

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class, 'proposals_services', 'proposal_id','service_id');
    }

    public static function getServicesByProposalId($proposal_id)
    {
        $services = Proposal::findOrFail($proposal_id)->services()->get();
                
        return $services;
    }
    public static function getProjectByProposalId($proposal_id)
    {
        $proposal = Proposal::findOrFail($proposal_id)->project()->get();
        
        return $proposal;
    }
}
