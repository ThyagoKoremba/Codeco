<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PerfilMenu extends Model
{
    protected $table = 'perfiles_menus';
    protected $fillable = [
        'id_perfil',
        'id_menu',
        'sn_activo'
    ];
}
