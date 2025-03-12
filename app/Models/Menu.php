<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menus';

    public function componentes()
    {
        return $this->belongsToMany(Componente::class, 'menus_componentes', 'id_menu', 'id_componente')->wherePivot('activo', true);
    }
}
