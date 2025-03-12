<?php

namespace Database\Seeders;

use App\Models\Componente;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ComponenteSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Componente::create([
            'nombre'      => 'Contactos',
            'descripcion' => '...',
            'activo'      => true,
            'url'         => 'test/contactos'
        ]);
        Componente::create([
            'nombre'      => 'Radicaciones',
            'descripcion' => '...',
            'activo'      => true,
            'url'         => 'test/radicaciones'
        ]);
        Componente::create([
            'nombre'      => 'Categorias',
            'descripcion' => '...',
            'activo'      => true,
            'url'         => 'test/categorias'
        ]);
        Componente::create([
            'nombre'      => 'Agregar',
            'descripcion' => 'LLama a agregar contacto',
            'activo'      => true,
            'url'         => 'test/contactos/agregar'
        ]);
        Componente::create([
            'nombre'      => 'Factura A',
            'descripcion' => '...',
            'activo'      => true,
            'url'         => 'test/facturaA'
        ]);
        Componente::create([
            'nombre'      => 'Factura B',
            'descripcion' => '...',
            'activo'      => true,
            'url'         => 'test/facturaB'
        ]);
    }
}
