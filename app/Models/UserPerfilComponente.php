<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPerfilComponente extends Model
{
    protected $table    = 'user_perfil_componentes';
    protected $fillable = ['id_user','id_perfil_componentes'];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function perfilComponente()
    {
        return $this->belongsTo(PerfilComponente::class, 'id_perfil_componentes');
    }
}
