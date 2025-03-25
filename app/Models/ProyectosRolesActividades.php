<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyectosRolesActividades extends Model
{
    use HasFactory;
    protected $table = 'proyectosrolesactividades';
    protected $primaryKey = ['proyectoid','rolid','actividadid'];
    public $incrementing = false;
    protected $fillable = [
        'proyectoid',
        'rolid',
        'actividadid',
        'identificadorproyecto',
        'ordenejecucion',
        'activosn',
        'informarproductorsn'
    ];
    public function proyecto()
    {
        return $this->belongsTo(Proyectos::class,'proyectoid','id');
    }
    public function rol()
    {
        return $this->belongsTo(Roles::class,'rolid','id');
    }
    public function actividad()
    {
        return $this->belongsTo(Actividades::class,'actividadid','id');
    }
}
