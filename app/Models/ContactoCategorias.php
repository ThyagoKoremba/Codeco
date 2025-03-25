<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactoCategorias extends Model
{
    use HasFactory;
    protected $table ="contactocategorias";
    protected $primaryKey = ['id_contacto','id_categoria'];
    public $incrementing = false;
    protected $fillable =[
        'id_contacto',
        'id_categoria',
        'id_identidad',
        'id_dato',
        'sn_activo',
        'id_user_created_at',
        'id_user_updated_at'
    ];
    public function contacto(){
        return $this->belongsTo(Contactos::class, 'id_contacto','id');
    }
    public function categoria(){
        return $this->belongsTo(Categorias::class, 'id_categoria','id');
    }

}
