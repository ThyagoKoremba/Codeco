<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioProyectos extends Model
{
    use HasFactory;
    protected $table = 'usuarioproyectos';
    protected $primaryKey = ['usuarioid', 'proyectoid'];
    public $incrementing = false;
    protected $fillable = [
        'usuarioid', 
        'proyectoid', 
        'updatetime',
        'activosn'
    ];
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuarioid', 'id');
    }
    public function proyecto()
    {
        return $this->belongsTo(Proyectos::class, 'proyectoid', 'id');
    }
}
