<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyectosProductores extends Model
{
    use HasFactory;
    protected $table='proyectosproductores';
    protected $primaryKey = ['proyectoid','productorid'];
    public $incrementing = false;
    protected $fillable = [
        'proyectoid',
        'productorid',
        'identificadorproyecto',
        'activosn'
    ];

    public function proyecto(){
        return $this->belongsTo(Proyectos::class,'proyectoid','id');
    }
    public function productor(){
        return $this->belongsTo(Productores::class,'productorid','id');
    }
}
