<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioProyectoProductores extends Model
{
    use HasFactory;
    protected $table = 'usuarioproyectoproductores';
    protected $fillable = [
        'usuarioid',
        'proyectoid',
        'productorid',
        'activosn'
    ];
    public function usuario () {
        return $this->belongsTo(Usuario::class, 'usuarioid', 'id');
    }
    public function proyecto () {
        return $this->belongsTo(Proyectos::class, 'proyectoid', 'id');
    }
    public function productor () {
        return $this->belongsTo(Productores::class, 'productorid', 'id');
    }
}
