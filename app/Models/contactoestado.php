<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contactoestado extends Model
{
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'abeviatura',
        'abeviatura_corta',
        'sn_activo',
    ];
}
