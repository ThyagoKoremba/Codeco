<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class contactoradicaciones extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_contacto',
        'latitud',
        'longitud',
        'descripcion',
        'id_provincia',
        'id_subregion',
        'direccion_calle',
        'id_departamento_ciudad',
        'id_localidad',
        'localidad',
        'codigo_postal',
        'sn_predeterminado',
        'sn_correspondencia',
        'sn_activo',
        'domicilioformateado',
    ];

    public function contacto()
    {
        return $this->belongsTo(contactos::class, 'id_contacto');
    }

    public function departamentoCiudad()
    {
        return $this->belongsTo(geolugares::class, 'id_departamento_ciudad');
    }

    public function localidad()
    {
        return $this->belongsTo(geolugares::class, 'id_localidad');
    }

    public function provincia()
    {
        return $this->belongsTo(geoprovinciasregiones::class, 'id_provincia');
    }

    public function subregion()
    {
        return $this->belongsTo(Geoprovinciasregiones::class, 'id_subregion');
    }
}
