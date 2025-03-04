<?php

namespace Database\Seeders;

use App\Models\PerfilComponente;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PerfilComponentesSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PerfilComponente::create([
            'id_componente' => 1,
            'id_perfil'     => 1,
            'activo'        => true
        ]);
        PerfilComponente::create([
            'id_componente' => 2,
            'id_perfil'     => 1,
            'activo'        => true
        ]);
    }
}
