<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class proyectocnfgnotificacion extends Model
{
    use HasFactory;
    protected $table ="proyectocnfgnotificacion";

    protected $fillable = [
        'proyectoid',
        'sn_mail_notificacion',
        'mail_notifiacion',
        'sn_movil_notificacion',
        'movil_notificacion',
        'sn_activo'
    ];
    
}
