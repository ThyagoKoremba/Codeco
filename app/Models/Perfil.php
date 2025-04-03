<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    protected $table = 'perfiles';
    protected $fillable = [
        'nombre',
        'informacion',
        'abreviatura',
        'sn_activo'
    ];

    public function menus()
    {
        return $this->belongsToMany(Menu::class, 'perfiles_menus', 'id_perfil', 'id_menu')
            ->wherePivot('sn_activo', true);
    }
}
