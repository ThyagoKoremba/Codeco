<?php

namespace App\Http\Controllers;

use App\Http\Requests\Proyectocnfgnotificacion\ProyectoCnfgNotificacionRequest;
use App\Http\Requests\Proyectocnfgnotificacion\ProyectocnfgnotificacionUpdate;
use App\Models\ProyectoCnfgNotificacion;
use App\Models\Proyectos;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProyectoCnfgNotificacionController extends Controller
{
    public function create(){
        return Inertia::render('Proyectocnfgnotificacion/Create');
    }

    public function searchProyecto(Request $request)
    {
        $query = $request->input('query');
        $page = $request->input('page', 1);
    
        $results = Proyectos::where('proyectonombre', 'like', "%$query%")
            ->paginate(5, ['*'], 'page', $page)
            ->appends(['query' => $query]);
    
            return response()-> json($results);
    }

    public function store (ProyectocnfgnotificacionRequest $request){
        $data=$request->all();
        proyectocnfgnotificacion::create($data);
        return to_route('proyectocnfgnotificacion.index');
    }

    public function index(){
        $proyectosnotif = proyectocnfgnotificacion::orderBy('id')->get();
        $proyectos=Proyectos::all();
        return Inertia::render('Proyectocnfgnotificacion/Index', compact('proyectosnotif','proyectos'));
    }

    public function edit(ProyectoCnfgNotificacion $proyectonotif)
    {
        $proyecto = Proyectos::find($proyectonotif->proyectoid);
    
        return Inertia::render('Proyectocnfgnotificacion/Edit', [
            'proyectonotif' => $proyectonotif,
            'proyectoNom' => $proyecto ? $proyecto->proyectonombre : '', // Si no encuentra el proyecto, devuelve vacío
        ]);
    }
    

    public function update (ProyectocnfgnotificacionUpdate $request, ProyectoCnfgNotificacion $proyectonotif){
        $data=$request->all();
        $proyectonotif->update($data);
        return to_route("proyectocnfgnotificacion.index");
    }

    public function cambiarEstado(ProyectoCnfgNotificacion $proyectonotif) {
        $proyectonotif->sn_activo=!$proyectonotif->sn_activo;
        $proyectonotif->save();
        return to_route("proyectocnfgnotificacion.index");
    }


}
