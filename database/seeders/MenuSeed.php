<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Menu::create([
            'nombre'      => 'Gestión de contacto',
            'abreviatura' => 'GC',
            'informacion' => '...',
            'activo'      => true
        ]);
        Menu::create([
            'nombre'      => 'Facturador',
            'abreviatura' => 'FAC',
            'informacion' => '...',
            'activo'      => true
        ]);
    }
}
