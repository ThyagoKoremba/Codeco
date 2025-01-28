<?php

namespace Database\Seeders;

use App\Models\fisicojuridicos;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FisicojuridicosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
     fisicojuridicos::create([
        'id'=>'1',
        'descripcion'=>'...',
        'abeviatura'=>'...',
        'abeviatura_corta'=>'...',
        'sn_fecha_nacimiento'=>false,
        'sn_nacionalidad'=>false,
        'sn_situacioncivil'=>false,
        'sn_segundonombre'=>false,
        'texto_apellido'=>'Apellido',
        'texto_nombre'=>'Nombre',
     ]);
     fisicojuridicos::create([
        'id'=>'2',
        'descripcion'=>'JURIDICO',
        'abeviatura'=>'JURIDICO',
        'abeviatura_corta'=>'J',
        'sn_fecha_nacimiento'=>false,
        'sn_nacionalidad'=>false,
        'sn_situacioncivil'=>false,
        'sn_segundonombre'=>false,
        'texto_apellido'=>'Razón Social',
        'texto_nombre'=>'Nombre de Fantasia',
     ]);
     fisicojuridicos::create([
        'id'=>'3',
        'descripcion'=>'FEMENINO',
        'abeviatura'=>'FEMENINO',
        'abeviatura_corta'=>'F',
        'sn_fecha_nacimiento'=>true,
        'sn_nacionalidad'=>true,
        'sn_situacioncivil'=>true,
        'sn_segundonombre'=>true,
        'texto_apellido'=>'Apellido(s)',
        'texto_nombre'=>'Nombre',
     ]);
     fisicojuridicos::create([
        'id'=>'4',
        'descripcion'=>'MASCULINO',
        'abeviatura'=>'MASCULINO',
        'abeviatura_corta'=>'M',
        'sn_fecha_nacimiento'=>true,
        'sn_nacionalidad'=>true,
        'sn_situacioncivil'=>true,
        'sn_segundonombre'=>true,
        'texto_apellido'=>'Apellido(s)',
        'texto_nombre'=>'Nombre',
     ]);
    }
}
