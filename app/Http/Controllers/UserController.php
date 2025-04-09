<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    /*
    * 
    * Retorna: los perfiles del usuario junto con los menus del perfil y los componentes exceptuados para el usuario
    *
    */
    public function getPerfilesMenusComponentesExceptuadosByUser(): JsonResponse
    {
        $usuarioSesion = Auth::user();

        $usuairo = User::with([
            'perfiles.menus.componentes' => function ($query) use ($usuarioSesion) {
                $query->with(['usersExcepcion' => function ($subQuery) use ($usuarioSesion) {
                    $subQuery->where('id_user', $usuarioSesion->id);
                }]);
            }
        ])->findOrFail($usuarioSesion->id);

        $response = $usuairo->perfiles->map(function ($perfil) {
            return [
                'perfil' => $perfil->nombre,
                'menus' => $perfil->menus->map(function ($menu) {
                    $componentesExceptuados = $menu->componentes->filter(function ($componente) {
                        return $componente->usersExcepcion->isNotEmpty();
                    });
                    return [
                        'menu' => $menu->nombre,
                        'excepcion_componentes' => $componentesExceptuados->pluck('nombre')->toArray(),
                    ];
                })->toArray(),
            ];
        });

        dd(response()->json($response));

        return response()->json($response);
    }
}
