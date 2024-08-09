<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'description',
        'start_date',
        'due_date',
        'completion_date',
        'hub_id',
        'status_id',
        'priority_id',
        'manager_id',
        'notes',
    ];
}
