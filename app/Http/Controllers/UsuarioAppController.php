<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsuarioApp\UsuarioAppRequest;
use App\Http\Requests\UsuarioApp\UsuarioAppUpdate;
use App\Models\Usuario;

use Inertia\Inertia;
use Illuminate\Support\Str;

class UsuarioAppController extends Controller
{
    public function create()
    {
        return Inertia::render("UsuarioApp/Create");
    }

    public function store(UsuarioAppRequest $request)
    {
        $usuarioapp = new Usuario();
        $usuarioapp->usuariocodigouuid = Str::uuid();
        $usuarioapp->dnicuit = $request->input('dnicuit');
        $usuarioapp->nombres = $request->get('nombres');
        $usuarioapp->apellido = $request->get('apellido');
        $usuarioapp->usuario = $request->get('usuario');
        $usuarioapp->clave = $request->get('clave');
        $usuarioapp->mail = $request->get('mail');
        $usuarioapp->telefono = $request->get('telefono');
        $usuarioapp->activosn = $request->boolean('activosn');
        $usuarioapp->observaciones = $request->get('observaciones');
        $usuarioapp->vigenciahasta = $request->input('vigenciahasta');
        $usuarioapp->patronbusqueda =
            $request->get('nombres') . ' ' .
            $request->get('usuario') . ' ' .
            $request->get('mail') . ' ' .
            $request->get('dnicuit');

        $usuarioapp->save();
        return to_route("usuarioapp.index");
    }

    public function index()
    {
        $usuariosapp = Usuario::orderBy("id")->get();
        return Inertia::render("UsuarioApp/Index", compact('usuariosapp'));
    }

    public function edit(Usuario $usuarioapp)
    {
        return Inertia::render("UsuarioApp/Edit", compact('usuarioapp'));
    }

    public function update(UsuarioAppUpdate $request, Usuario $usuarioapp)
    {
        $data = $request->all();
        $usuarioapp->update($data);
        return to_route('usuarioapp.index');
    }

    public function cambiarEstado(Usuario $usuarioapp)
    {
        $usuarioapp->activosn = !$usuarioapp->activosn;
        $usuarioapp->save();
        return to_route('usuarioapp.index');
    }
}
