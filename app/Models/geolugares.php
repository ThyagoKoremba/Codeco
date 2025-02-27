<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeoLugares extends Model
{
    use HasFactory;

    protected $table = "geolugares";
    protected $fillable = 
    [
        'descripcion',
        'sn_activo',
    ];
}
