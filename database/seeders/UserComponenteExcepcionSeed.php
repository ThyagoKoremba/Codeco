<?php

namespace Database\Seeders;

use App\Models\Componente;
use App\Models\User;
use App\Models\UserComponenteExcepcion;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserComponenteExcepcionSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserComponenteExcepcion::create([
            'id_user'      => User::find(1)->id,
            'id_componente'=> Componente::find(2)->id
        ]);
    }
}
