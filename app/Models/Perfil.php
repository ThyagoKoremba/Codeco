<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perfil extends Model
{
    protected $table = 'perfiles';

    public function componentes()
    {
        return $this->belongsToMany(Componente::class, 'perfil_componentes', 'id_perfil', 'id_componente');
    }

    public function usuarios()
    {
        return $this->belongsToMany(User::class, 'users_perfiles', 'id_perfil', 'id_user');
    }
}
