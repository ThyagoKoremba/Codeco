<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactoBancos extends Model
{
    use HasFactory;
    protected $table="contactobancos";
    protected $fillable =[
        'id_contacto',
        'id_banco',
        'id_bancosucursal',
        'moneda',
        'identificaciondecuenta',
        'sn_activo'
    ];

    public function contacto(){
        return $this->belongsTo(Contactos::class, 'id_contacto','id');
    }
    public function contactoRadicaciones(){
        return $this->belongsTo(ContactoRadicaciones::class, 'id_bancosucursal','id');
    }
    public function banco(){
        return $this->belongsTo(Contactos::class, 'id_banco','id');
    }

}
