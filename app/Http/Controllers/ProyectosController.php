<?php

namespace App\Http\Controllers;

use App\Http\Requests\Proyecto\ProyectoRequest;
use App\Http\Requests\Proyecto\ProyectoUpdate;
use App\Models\Proyectos;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProyectosController extends Controller
{
    public function create () {
        return Inertia::render('Proyecto/Create');
    }
    
    public function store(ProyectoRequest $request){
        $proyecto = new Proyectos();
        $proyecto->identificadorproyecto    = Str::uuid();
        $proyecto->proyectonombre           = $request->get('proyectonombre');
        $proyecto->proyectoabreviatura      = $request->get('proyectoabreviatura');
        $proyecto->fechainicio              = $request->input('fechainicio');
        $proyecto->fechafinalizacion        = $request->input('fechafinalizacion');
        $proyecto->activosn                 = $request->boolean('activosn');
        $proyecto->patronbusqueda           =
                                            $request->get('proyectonombre') . ' ' .
                                            $request->get('proyectoabreviatura') . ' ' .
                                            $request->get('proyectodescripcion');
        $proyecto->productoressn            = $request->boolean('productoressn');
        $proyecto->proyectodescripcion      = $request->get('proyectodescripcion');

        $proyecto->save();

        return to_route('proyecto.index');
    }

    public function index()
    {
        $proyectos=Proyectos::get();
        return Inertia::render('Proyecto/Index',compact('proyectos'));
    }

    public function edit(Proyectos $proyecto){
        return Inertia::render('Proyecto/Edit',compact('proyecto'));
    }

    public function update(ProyectoUpdate $request, Proyectos $proyecto){
        
        $data = $request->all();
        $proyecto->update($data);
        $proyecto->patronbusqueda = $proyecto->proyectonombre . ' ' . $proyecto->proyectoabreviatura . ' ' . $proyecto->proyectodescripcion;
        $proyecto->save();
        return to_route('proyecto.index');
    }

    public function cambiarEstado(Proyectos $proyecto){
        $proyecto->activosn=!$proyecto->activosn;
        $proyecto->save();
        return to_route('proyecto.index');
    }
}
