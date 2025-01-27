<?php

namespace Database\Seeders;

use App\Models\Contactosituacionciviles;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContactosituacioncivilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contactosituacionciviles::create([
            'id'=>'1',
            'descripcion'=>'...' 
        ]);
        Contactosituacionciviles::create([
            'id'=>'2',
            'descripcion'=>'Soltero/a' 
        ]);
        Contactosituacionciviles::create([
            'id'=>'3',
            'descripcion'=>'Casado/a' 
        ]);
        Contactosituacionciviles::create([
            'id'=>'4',
            'descripcion'=>'Viudo/a' 
        ]);
        Contactosituacionciviles::create([
            'id'=>'5',
            'descripcion'=>'Divorciado/a' 
        ]);
        Contactosituacionciviles::create([
            'id'=>'6',
            'descripcion'=>'Concubino/a' 
        ]);
    }
}
