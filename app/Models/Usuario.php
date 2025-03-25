<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuario';
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

    public function productor(){
        return $this->belongsTo(Productores::class,'productorid','id');
    }
}
