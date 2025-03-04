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
            'nombre'      => 'Lista de test',
            'descripcion' => 'Lista',
            'activo'      => true
        ]);
        Componente::create([
            'nombre'      => 'EditarTest',
            'descripcion' => 'Opción editar completo',
            'activo'      => true
        ]);
    }
}
