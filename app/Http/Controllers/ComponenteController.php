<?php

namespace App\Http\Controllers;

use App\Http\Requests\Componente\ComponenteRequest;
use App\Http\Requests\Componente\ComponenteUpdate;
use App\Models\Componentes;
use Inertia\Inertia;

class ComponenteController extends Controller
{
    public function create ()  {
        return Inertia::render('Componente/Create');
    }

    public function store (ComponenteRequest $request) {

        $data = $request->all();
        Componentes::create($data);
        return to_route ('componente.vista');
    }

    public function vista(){
        $componentes = Componentes::all();
        return Inertia::render('Componente/Vista', compact('componentes'));
    }

    public function edit(Componentes $componente){
        return Inertia::render('Componente/Edit', compact('componente'));
        
    }

    public function update(ComponenteUpdate $request, Componentes $componente){
        $componente->update($request->all());
        return to_route('componente.vista');
    }

    public function cambiarEstado(Componentes $componente){
        $componente->sn_activo = !$componente->sn_activo;
        $componente->save();
        return to_route('componente.vista');
    }
}
