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
            'nombre'      => 'Test',
            'descripcion' => 'Perfil Test, no considera super_admin',
            'abreviatura' => 'TEST',
            'activo'      => true
        ]);
    }
}
