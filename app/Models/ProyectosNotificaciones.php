<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyectosNotificaciones extends Model
{
    use HasFactory;
    protected $table= "proyectosnotificaciones";
    protected $fillable = [
        'idctrl',
        'sn_notificado',
        'fecha_notificado',
        'sn_en_proceso'
    ];
    public function proyectoctrlnotif (){
        return $this->belongsTo(IgbmRegistroCtrl::class, 'idctrl','id');
    }
}
