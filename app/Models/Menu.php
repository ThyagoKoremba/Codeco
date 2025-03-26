<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menus';
    protected $fillable = [
        'nombre',
        'abreviatura',
        'informacion',
        'sn_activo'
    ];	
    public function componentes()
    {
        return $this->belongsToMany(Componentes::class, 'menus_componentes', 'id_menu', 'id_componente')->wherePivot('activo', true)->withTimestamps();;
    }
    
}
