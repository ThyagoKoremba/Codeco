<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Identidades extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'abreviatura',
        'dato_mascara',
        'dato_default',
        'sn_fisica',
        'sn_juridica',
        'sn_identidadtributaria',
        'sn_activo',
        'sn_registro_sistema',
        'id_pais',
        'id_pais_identidad',
    ];

    public function geopais(){
        return $this->belongsTo(Geopais::class,'id_pais', 'id');
    }
}
