<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyectosCnfgNotifMail extends Model
{
    use HasFactory;
    protected $table='proyectoscnfgnotifmail';
    protected $primaryKey = 'proyectoid';
    public $incrementing = false;
    protected $fillable = [
        'proyectoid',
        'mail_notificador',
        'mail_clave',
        'sn_activo'
    ];
    public function proyecto (){
        return $this->belongsTo(Proyectos::class, 'proyectoid','id');
    }
}
