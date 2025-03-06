<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioApp extends Model
{
    use HasFactory;
    protected $table = 'usuarios_app';
    protected $fillable = [
        'usuariocodigouuid',
        'dnicuit',
        'nombres',
        'apellido',
        'usuario',
        'clave',
        'mail',
        'telefono',
        'activosn'=>'boolean',
        'modedemosn'=>'boolean',
        'observaciones',
        'productorid',
        'vigenciahasta'=>'date',
        'patronbusqueda',
        'updateusuarioctrl'=>'datetime',
        'updateusuarioapp'=>'datetime',
        ];
}
