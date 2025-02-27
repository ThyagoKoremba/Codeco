<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CondicionTributarias extends Model
{
    use HasFactory;

    protected $table = "condiciontributarias";

    protected $fillable = [
        'descripcion',
        'abreviatura',
        'sn_identidadtributaria',
        'sn_condiciontributaria',
        'id_tributaria_afip',
        'sn_registrosistema',
    ];
}
