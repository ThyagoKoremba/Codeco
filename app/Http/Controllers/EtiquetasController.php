<?php

namespace App\Http\Controllers;

use App\Http\Requests\Etiqueta\EtiquetaRequest;
use App\Http\Requests\Etiqueta\EtiquetaUpdate;
use App\Models\Etiquetas;
use Inertia\Inertia;

class EtiquetasController extends Controller
{
    public function create (){
        return Inertia::render('Etiqueta/Create');
    }

    public function store (EtiquetaRequest $request){
        $data=$request->all();
        Etiquetas::create($data);
        return to_route('etiqueta.index');
    }

    public function index (){
        $etiquetas=Etiquetas::orderBy('id')->get();
        return Inertia::render('Etiqueta/Index',compact('etiquetas'));
    }

    public function edit (Etiquetas $etiqueta){        
        return Inertia::render('Etiqueta/Edit',compact('etiqueta'));
    }

    public function update (Etiquetas $etiqueta, EtiquetaUpdate $request){
        $data=$request->all();
        $etiqueta->update($data);
        return to_route('etiqueta.index');
    }

    public function cambiarEstado (Etiquetas $etiqueta){
        $etiqueta->activosn=!$etiqueta->activosn;
        $etiqueta->save();
        return  to_route('etiqueta.index');
    }
}
