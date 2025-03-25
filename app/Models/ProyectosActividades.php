<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyectosActividades extends Model
{
    use HasFactory;
    protected $table = 'proyectosactividades';
    protected $primaryKey = ['proyectoid','actividadid'];
    public $incrementing = false;
    protected $fillable =[
        'proyectoid',
        'actividadid',
        'ordenejecuciondefault',
        'identificadorproyecto',
        'activosn',
        'productoridsn',
        'productoriddefault'
    ];

    public function proyecto (){
        return $this->belongsTo(Proyectos::class, 'proyectoid','id');
    }
    public function actividad (){
        return $this->belongsTo(Actividades::class, 'actividadid','id');
    }
}
