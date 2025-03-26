<?php

namespace Database\Seeders;

use App\Models\Componentes;
use App\Models\Perfil;
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
        $perfil     = Perfil::find(1);

        PerfilComponente::create([
            'id_componente' => Componentes::find(1)->id,
            'id_perfil'     => $perfil->id,
            'activo'        => true
        ]);
        PerfilComponente::create([
            'id_componente' => Componentes::find(2)->id,
            'id_perfil'     => $perfil->id,
            'activo'        => true
        ]);
    }
}
