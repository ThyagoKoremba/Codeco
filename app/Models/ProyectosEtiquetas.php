<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyectosEtiquetas extends Model
{
    use HasFactory;
    protected $table = 'proyectosetiquetas';
    protected $primaryKey= ['proyectoid','etiquetaid'];
    public $incrementing = false;
    protected $fillable = [
        'proyectoid',
        'etiquetaid',
        'activosn'
    ];
    public function proyecto (){
        return $this->belongsTo(Proyectos::class, 'proyectoid','id');
    }
    public function etiqueta (){
        return $this->belongsTo(Etiquetas::class, 'etiquetaid','id');
    }
}
