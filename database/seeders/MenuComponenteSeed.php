<?php

namespace Database\Seeders;

use App\Models\Componentes;
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
            'id_componente' => Componentes::find(1)->id,
            'orden'         => 1,
            'activo'        => true
        ]);
        //Gestion de contacto - Radicaciones
        MenuComponente::create([
            'id_menu'       => Menu::find(1)->id,
            'id_componente' => Componentes::find(2)->id,
            'orden'         => 2,
            'activo'        => true
        ]);
        //Gestion de contacto - caregorias
        MenuComponente::create([
            'id_menu'       => Menu::find(1)->id,
            'id_componente' => Componentes::find(3)->id,
            'orden'         => 3,
            'activo'        => true
        ]);
        //Gestion de contacto - Contactos
        MenuComponente::create([
            'id_menu'       => Menu::find(2)->id,
            'id_componente' => Componentes::find(4)->id,
            'orden'         => 1,
            'activo'        => true
        ]);
        //Facturador Factura A
        MenuComponente::create([
            'id_menu'       => Menu::find(2)->id,
            'id_componente' => Componentes::find(5)->id,
            'orden'         => 1,
            'activo'        => true
        ]);
        //Facturador Factura B
        MenuComponente::create([
            'id_menu'       => Menu::find(2)->id,
            'id_componente' => Componentes::find(6)->id,
            'orden'         => 1,
            'activo'        => true
        ]);
    }
}
