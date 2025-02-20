<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productores extends Model
{
    use HasFactory;
    protected $fillable= [
        'usuariocodigouuid',
        'usuarioid',
        'apellido',
        'nombres',
        'dnicuit',
        'mail',
        'telefono',
        'patronbusqueda',
        'activosn'
    ];
}
