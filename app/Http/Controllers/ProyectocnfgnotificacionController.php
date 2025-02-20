<?php

namespace App\Http\Controllers;

use App\Http\Requests\Proyectocnfgnotificacion\ProyectocnfgnotificacionRequest;
use App\Models\proyectocnfgnotificacion;
use App\Models\Proyectos;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProyectocnfgnotificacionController extends Controller
{
    public function create(){
        return Inertia::render('Proyectocnfgnotificacion/Create');
    }

    public function store (ProyectocnfgnotificacionRequest $request){
        $data=$request->all();
        proyectocnfgnotificacion::create($data);
        return redirect()->route('proyectocnfgnotificacion.index');
    }

    public function index(){
        $proyectosnotif = proyectocnfgnotificacion::orderBy('id')->get();
        return Inertia::render('Proyectocnfgnotificacion/Index', compact('proyectosnotif'));
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
}
