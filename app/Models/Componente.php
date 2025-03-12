<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Componente extends Model
{
    protected $table = 'componentes';

    public function perfiles()
    {
        return $this->belongsToMany(Perfil::class, 'perfil_componentes', 'id_componente', 'id_perfil');
    }

    public function excepciones()
    {
        return $this->hasMany(UserComponenteExcepcion::class, 'id_componente');
    }
}
