<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MovilUsuarioCtrl extends Model
{
    use HasFactory;
    protected $table ="movilusuarioctrl";
    protected $fillable =[
        'useruuid',
        'marcamodelo',
        'sistemaoperativoversion',
        'screenresolution',
        'screendensity',
        'fechahora'
    ];
}
