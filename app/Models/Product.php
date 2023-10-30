<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'brand', 
        'img',
        'product_code',
        'reward_point',
        'availability',
        'price',
        'quantity',
        'description',
        'specification'
    ];
}
