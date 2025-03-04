<?php

namespace Database\Seeders;

use App\Models\UserPerfilComponente;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserPerfilComponentesSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserPerfilComponente::create([
            'id_user'               => 2,
            'id_perfil_componentes' => 1,
            'activo'                => true
        ]);
        UserPerfilComponente::create([
            'id_user'               => 2,
            'id_perfil_componentes' => 2,
            'activo'                => true
        ]);
    }
}
