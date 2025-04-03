<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PerfilComponente extends Model
{
    public function componente()
    {
        return $this->belongsTo(Componentes::class, 'id_componente');
    }

    public function perfil()
    {
        return $this->belongsTo(Perfil::class, 'id_perfil');
    }
}
