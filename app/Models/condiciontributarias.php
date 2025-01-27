<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class condiciontributarias extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'abreviatura',
        'sn_identidadtributaria',
        'sn_condiciontributaria',
        'id_tributaria_afip',
        'sn_registrosistema',
    ];
}
