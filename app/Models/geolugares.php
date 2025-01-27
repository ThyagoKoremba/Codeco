<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class geolugares extends Model
{
    use HasFactory;
    protected $fillable = 
    [
        'descripcion',
        'sn_activo',
    ];
}
