<?php

namespace App\Http\Controllers;

use App\Http\Requests\Actividad\ActividadRequest;
use App\Http\Requests\Actividad\ActividadUpdate;
use App\Models\Actividades;
use Inertia\Inertia;

class ActividadController extends Controller
{
    public function create () {
        return Inertia::render('Actividad/Create');
    }

    public function store(ActividadRequest $request){

        $data=$request->all();
        Actividades::create($data);
        return to_route('actividad.index');
    }

    public function index(){
        $actividades = Actividades::orderBy('id')->get();
        return Inertia::render('Actividad/Index',compact('actividades'));
    }

    public function edit(Actividades $actividad){
        return Inertia::render('Actividad/Edit',compact('actividad'));
    }

    public function update(ActividadUpdate $request, Actividades $actividad){
        $data = $request->all();
        $actividad->update($data);
        return to_route('actividad.index');
    }

    public function cambiarEstado (Actividades $actividad)
    {
        $actividad->activosn = !$actividad->activosn;
        $actividad->save();
    
        return to_route('actividad.index');
    }



}
