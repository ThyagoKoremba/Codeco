<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class geopais extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'abreviatura',
        'sn_activo',
        'isonumero',
        'iso2',
        'iso3',
        'ddi',
        'sn_provincia_determinada',
        'id_provincia_determinada',
    ];
}
