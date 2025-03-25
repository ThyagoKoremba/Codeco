<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsuarioProyectosRolesActividades extends Model
{
    use HasFactory;
    protected $table = 'usuarioproyectosrolesactividades';
    protected $primaryKey = ['usuarioid','proyectoid','rolid','actividadid'];
    public $incrementing = false;
    protected $fillable = ['usuarioid','proyectoid','rolid','actividadid','activosn'];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class,'usuarioid','id');
    }
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
