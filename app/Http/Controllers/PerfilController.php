<?php

namespace App\Http\Controllers;

use App\Http\Requests\Perfil\PerfilRequest;
use App\Http\Requests\Perfil\PerfilUpdate;
use App\Models\Perfil;
use Inertia\Inertia;

class PerfilController extends Controller
{
    public function vista(){
        $perfiles = Perfil::all();
        return Inertia::render('Perfil/Vista',compact('perfiles'));
    }

    public function store(PerfilRequest $request){
        $data=$request->all();
        Perfil::create($data);
        return to_route('perfil.vista');
    }

    public function edit(Perfil $perfil){
        return Inertia::render('Perfil/Edit',compact('perfil'));
    }

    public function update(PerfilUpdate $request, Perfil $perfil){
        $data=$request->all();
        $perfil->update($data);
        return to_route('perfil.vista');
    }

    public function cambiarEstado(Perfil $perfil){
        $perfil->sn_activo=!$perfil->sn_activo;
        $perfil->save();
        return to_route('perfil.vista');
    }
}
