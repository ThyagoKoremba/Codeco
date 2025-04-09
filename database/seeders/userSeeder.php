<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'        =>'Codeco',
            'email'       =>'codeco@admin.com',
            'password'    =>'codeco',
            'super_admin' => true,
            'activo'      => true,
        ]);
        User::create([
            'name'    =>'Thyago',
            'email'   =>'thyagotest@codeco.com',
            'password'=>'123456',
            'activo'  => true,
        ]);
        User::create([
            'name'    =>'Lucas',
            'email'   =>'lucastest@codeco.com',
            'password'=>'654321',
            'activo'  => true,
        ]);
    }
}
