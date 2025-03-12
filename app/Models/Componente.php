<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Componente extends Model
{
    protected $table = 'componentes';

    public function usersExcepcion()
    {
        return $this->belongsToMany(User::class, 'users_componentes_excepcion', 'id_componente', 'id_user');
    }
}
