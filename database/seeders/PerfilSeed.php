<?php

namespace Database\Seeders;

use App\Models\Perfil;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PerfilSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Perfil::create([
            'nombre'      => 'Facturador',
            'informacion' => '',
            'abreviatura' => 'Facturador',
            'activo'      => true
        ]);
        Perfil::create([
            'nombre'      => 'Usuario CRM',
            'informacion' => '',
            'abreviatura' => 'Usuario CRM',
            'activo'      => true
        ]);
        Perfil::create([
            'nombre'      => 'Administrador',
            'informacion' => '',
            'abreviatura' => 'Administrador',
            'activo'      => true
        ]);
    }
}
