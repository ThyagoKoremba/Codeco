<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyectos extends Model
{
    use HasFactory;
    protected $fillable = [
        'identificadorproyecto',
        'proyectonombre',
        'proyectoabreviatura',
        'fechainicio',
        'fechafinalizacion',
        'activosn',
        'patronbusqueda',
        'productoressn',
        'proyectodescripcion',
        'url_carpeta_config',
        'img_icon_gps',
        'img_web',
        'img_app_carrusel',
        'img_app_encabezado',
        'gps_popup_color',
        'url_carpeta_destino_img',
    ];
}
