<?php

namespace Database\Seeders;

use App\Models\Geolugares;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GeolugaresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Geolugares::create([
            'id'=>'1',
            'descripcion'=>'prueba'
        ]);
    }
}
