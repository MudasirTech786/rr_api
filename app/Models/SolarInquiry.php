<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SolarInquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'zip',
        'is_home_owner',
        'address',
        'email',
        'full_name',
        'phone',
        'message'
    ];
}
