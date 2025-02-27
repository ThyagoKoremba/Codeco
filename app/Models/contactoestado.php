<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactoEstado extends Model
{
    use HasFactory;
    protected $table ="contactoestados";
    protected $fillable = [
        'descripcion',
        'abeviatura',
        'abeviatura_corta',
        'sn_activo',
    ];
}
