<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuComponente extends Model
{
    protected $table = 'menus_componentes';
    protected $fillable = [
        'id_menu',
        'id_componente',
        'sn_activo',
        'orden'
    ];
}
