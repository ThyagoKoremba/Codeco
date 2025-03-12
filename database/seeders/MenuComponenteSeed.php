<?php

namespace Database\Seeders;

use App\Models\Componente;
use App\Models\Menu;
use App\Models\MenuComponente;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuComponenteSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Gestion de contacto - Contactos
        MenuComponente::create([
            'id_menu'       => Menu::find(1)->id,
            'id_componente' => Componente::find(1)->id,
            'orden'         => 1,
            'activo'        => true
        ]);
        //Gestion de contacto - Radicaciones
        MenuComponente::create([
            'id_menu'       => Menu::find(1)->id,
            'id_componente' => Componente::find(2)->id,
            'orden'         => 2,
            'activo'        => true
        ]);
        //Gestion de contacto - caregorias
        MenuComponente::create([
            'id_menu'       => Menu::find(1)->id,
            'id_componente' => Componente::find(3)->id,
            'orden'         => 3,
            'activo'        => true
        ]);
                //Gestion de contacto - Contactos
        MenuComponente::create([
            'id_menu'       => Menu::find(2)->id,
            'id_componente' => Componente::find(4)->id,
            'orden'         => 1,
            'activo'        => true
        ]);
    }
}
