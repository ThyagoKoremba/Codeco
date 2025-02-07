<?php

namespace App\Http\Controllers;

use App\Http\Requests\Proyecto\ProyectoRequest;
use App\Http\Requests\Proyecto\ProyectoUpdate;
use App\Models\Proyectos;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProyectosController extends Controller
{
    public function create () {
        return Inertia::render('Proyecto/Create');
    }
    
    public function store(ProyectoRequest $request){
        return to_route('proyecto.store');
    }

    public function index()
    {
        $proyectos=Proyectos::get();
        return view('proyecto.index',compact('proyectos'));
    }

    public function edit(){
        return Inertia::render('Proyecto/Edit');
    }

    public function update(ProyectoUpdate $request, Proyectos $id){
        $proyectos = Proyectos::find($id);
        
        return to_route('proyecto.index');
    }
}
