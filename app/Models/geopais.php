<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Geopais extends Model
{
    use HasFactory;
    protected $table = "geopais";
    protected $fillable = [
        'nombre',
        'abreviatura',
        'sn_activo',
        'isonumero',
        'iso2',
        'iso3',
        'ddi',
        'sn_provincia_determinada',
        'id_provincia_determinada',
    ];

    public function identidades (){
        return $this->hasMany(Identidades::class);
    }
}
