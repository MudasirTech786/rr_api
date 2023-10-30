<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GreenBrilliance extends Model
{
    use HasFactory;
    protected $fillable = ['zip','is_home_owner','type_of_home','average_monthly_bill','electricity_provider','shade','solar_considering','credit_score','address','email','first_name','last_name','phone'];
}
