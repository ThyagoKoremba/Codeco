<?php

namespace App\Http\Controllers;

use App\Models\Componente;
use App\Models\User;
use App\Models\UserPerfilComponente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    // TODO FLOR : Renombrar el metodo por getComponentesByPerfilByUsuario
    public function getUserPerfilComponentes()
    {
        /*
        SELECT 
            c.*, 
            p.id, 
            p.nombre, 
            u.id, 
            u.name 
        FROM laravel.componentes c
        INNER JOIN laravel.perfil_componentes pc ON pc.id_componente = c.id 
        INNER JOIN laravel.perfiles p ON p.id = pc.id_perfil
        INNER JOIN laravel.users_perfiles up ON up.id_perfil = p.id 
        INNER JOIN laravel.users u ON u.id = up.id_user
        LEFT JOIN laravel.users_componentes_excepcion uce ON uce.id_componente = c.id AND uce.id_user = u.id
        WHERE p.activo 
        AND up.activo
        AND uce.id_componente IS NULL
        AND u.id = 1;
        */

        $user   = Auth::user();
        $userId = $user->id;

        $componentes = Componente::whereHas('perfiles', function ($query) use ($userId) {
                $query->whereHas('usuarios', function ($subQuery) use ($userId) {
                    $subQuery->where('users.id', $userId)
                            ->where('users_perfiles.activo', true);
                })->where('perfiles.activo', true);
            })
            ->whereDoesntHave('excepciones', function ($query) use ($userId) {
                $query->where('id_user', $userId);
            })
            ->with(['perfiles', 'perfiles.usuarios'])
            ->get();

        return Inertia::render('ComponentesPorUsuario', [
            'componentes' => $componentes,
        ]);
    }
}
