<?php

namespace App\Http\Controllers;

use App\Http\Requests\Productor\ProductorRequest;
use App\Http\Requests\Productor\ProductorUpdate;
use App\Models\Productores;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProductoresController extends Controller
{
    public function create(){
        return Inertia::render('Productor/Create');
    }

    public function store(ProductorRequest $request){
        $productor = new Productores;
        $productor->usuariocodigouuid   = Str::uuid();
        $productor->nombres             = $request->get('nombres');
        $productor->apellido            = $request->get('apellido');
        $productor->dnicuit             = $request->get('dnicuit');
        $productor->mail                = $request->get('mail');
        $productor->activosn            = $request->boolean('activosn');
        $productor->telefono            = $request->get('telefono');
        $productor->patronbusqueda      =
                                            $request->get('nombres') . ' ' .
                                            $request->get('apellido') . ' ' .
                                            $request->get('mail'). ' ' .
                                            $request->get('dnicuit');
        $productor->save();
        return to_route('productor.index');
    }

    public function index(){
        $productores = Productores::all();
        return Inertia::render('Productor/Index', compact('productores'));
    }

    public function edit(Productores $productor){
        return Inertia::render('Productor/Edit', compact('productor'));
    }

    public function update(ProductorUpdate $request, Productores $productor){
        $productor->nombres             = $request->get('nombres');
        $productor->apellido            = $request->get('apellido');
        $productor->dnicuit             = $request->get('dnicuit');
        $productor->mail                = $request->get('mail');
        $productor->activosn            = $request->boolean('activosn');
        $productor->telefono            = $request->get('telefono');
        $productor->patronbusqueda      =
                                            $request->get('nombres') . ' ' .
                                            $request->get('apellido') . ' ' .
                                            $request->get('mail'). ' ' .
                                            $request->get('dnicuit');
        $productor->save();
        return to_route('productor.index');
    }

    public function cambiarEstado(Productores $productor){
        $productor->activosn = !$productor->activosn;
        $productor->save();
        return to_route('productor.index');
    }
}
