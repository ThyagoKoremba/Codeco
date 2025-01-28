<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fisicojuridicos extends Model
{
    use HasFactory;
    protected $fillable = [
        'descripcion',
        'abeviatura',
        'abeviatura_corta',
        'sn_fecha_nacimiento',
        'sn_nacionalidad',
        'sn_situacioncivil',
        'sn_segundonombre',
        'texto_apellido',
        'texto_nombre',
    ];
}
