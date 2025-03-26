<?php

namespace Database\Seeders;

use App\Models\Componentes;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ComponenteSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Componentes::create([
            'nombre'      => 'Contactos',
            'descripcion' => '...',
            'sn_activo'      => true,
            'url'         => 'test/contactos'
        ]);
        Componentes::create([
            'nombre'      => 'Radicaciones',
            'descripcion' => '...',
            'sn_activo'      => true,
            'url'         => 'test/radicaciones'
        ]);
        Componentes::create([
            'nombre'      => 'Categorias',
            'descripcion' => '...',
            'sn_activo'      => true,
            'url'         => 'test/categorias'
        ]);
        Componentes::create([
            'nombre'      => 'Agregar',
            'descripcion' => 'LLama a agregar contacto',
            'sn_activo'      => true,
            'url'         => 'test/contactos/agregar'
        ]);
        Componentes::create([
            'nombre'      => 'Factura A',
            'descripcion' => '...',
            'sn_activo'      => true,
            'url'         => 'test/facturaA'
        ]);
        Componentes::create([
            'nombre'      => 'Factura B',
            'descripcion' => '...',
            'sn_activo'      => true,
            'url'         => 'test/facturaB'
        ]);
    }
}
