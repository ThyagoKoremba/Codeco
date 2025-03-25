<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IgbmRegistroCtrl extends Model
{
    use HasFactory;
    protected $table="igbmregistroctrl";
    protected $primaryKey="idctrl";
    protected $fillable =[
        'registrouuidctrl',
        'fechayhoraregistroctrl',
        'idapps',
        'registroapps',
        'fecharegistroapps',
        'horaregistroapps',
        'fechacaptura',
        'usuarioid',
        'proyectoid',
        'rolid',
        'actividadid',
        'productorid',
        'titulo',
        'descripcion',
        'referencia',
        'etiquetaid',
        'latitud',
        'longitud',
        'imagennombre',
        'imagencantidad',
        'procesadosc',
        'imagenenviadasn',
        'pathmultimedia',
        'patronbusqueda'
    ];

    public function usuario (){
        return $this->belongsTo(User::class, 'usuarioid','id');
    }
    public function proyecto (){
        return $this->belongsTo(Proyectos::class, 'proyectoid','id');
    }
    public function rol (){
        return $this->belongsTo(Roles::class, 'rolid','id');
    }
    public function actividad (){
        return $this->belongsTo(Actividades::class, 'actividadid','id');
    }
    public function productor (){
        return $this->belongsTo(Productores::class, 'productorid','id');
    }
    public function etqiueta (){
        return $this->belongsTo(Etiquetas::class, 'etiquetaid','id');
    }
}
