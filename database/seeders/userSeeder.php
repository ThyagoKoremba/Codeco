<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Bouncer;

class userSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'=>'Codeco',
            'email'=>'codeco@admin.com',
            'password'=>'codeco',
        ]);
        User::create([
            'name'=>'User',
            'email'=>'codeco@user.com',
            'password'=>'codeco',
        ]);

        $admin = Bouncer::role()->firstOrCreate([
            'name' => 'admin',
            'title' => 'Administrator',
        ]);
        
        $admin_abilities = Bouncer::ability()->firstOrCreate([
            'name' => 'crear-contacto',
            'title' => 'Crear nuevo contacto',
        ]);
        
        Bouncer::allow($admin)->to($admin_abilities);
        $user = User::first();
        Bouncer::assign('admin')->to($user);
    }
}
