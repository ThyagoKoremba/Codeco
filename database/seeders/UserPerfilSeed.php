<?php

namespace Database\Seeders;

use App\Models\Perfil;
use App\Models\User;
use App\Models\UserPerfil;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserPerfilSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Usuario Thyago perfil Facturador
        UserPerfil::create(
            [
                'id_user'    => User::find(2)->id,
                'id_perfil'  => Perfil::find(1)->id,
                'activo'     => true
            ]
        );
        // Lucas perfil Usuario CRM
        UserPerfil::create(
            [
                'id_user'    => User::find(3)->id,
                'id_perfil'  => Perfil::find(2)->id,
                'activo'     => true
            ]
        );
        // Lucas perfil Facturador
        UserPerfil::create(
            [
                'id_user'    => User::find(3)->id,
                'id_perfil'  => Perfil::find(1)->id,
                'activo'     => true
            ]
        );
    }
}
