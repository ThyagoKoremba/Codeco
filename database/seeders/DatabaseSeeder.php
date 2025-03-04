<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(GeopaisSeeder::class);
        $this->call(GeolugaresSeeder::class);
        $this->call(GeoprovinciasregionesSeeder::class);
        $this->call(CategoriaSeeder::class);
        $this->call(CondiciontributariasSeeder::class);
        $this->call(ContactoestadoSeeder::class);
        $this->call(ContactosituacioncivilesSeeder::class);
        $this->call(FisicojuridicosSeeder::class);
        $this->call(GeoprovinciasregionesSeeder::class);
        $this->call(IdentidadesSeeder::class);
        $this->call(UserSeeder::class);

        $this->call(PerfilSeed::class);
        $this->call(ComponenteSeed::class);
        $this->call(PerfilComponentesSeed::class);
        $this->call(UserPerfilComponentesSeed::class);
    }
}
