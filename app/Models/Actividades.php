<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Actividades extends Model
{
    use HasFactory;
    protected $table = 'actividades';
   
    public $timestamps = false;
   
    protected $fillable = [
        'actividadnombre',
        'actividadabreviatura',
        'isdefaultvalue',
        'activosn',
        'titulosn',
        'informacionsn',
        'etiquetasn',
        'actividaddsc',
    ];
}