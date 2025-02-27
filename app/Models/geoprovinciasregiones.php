<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeoProvinciasRegiones extends Model
{
    use HasFactory;
    protected $table ="geoprovinciasregiones";
    protected $fillable = [
        'descripcion',
        'abreviatura',
        'sn_activo',
        'provincia_iso2',
        'sn_registrosistema',
        'sn_id_departamento',
        'id_departamento_predetermindo',
        'id_pais',
    ];
}
