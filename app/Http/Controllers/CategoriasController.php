<?php

namespace App\Http\Controllers;

use App\Http\Requests\Categoria\CategoriaRequest;
use App\Http\Requests\Categoria\CategoriaUpdate;
use App\Models\Categorias;
use App\Models\ContactoCategorias;
use Inertia\Inertia;

class CategoriasController extends Controller
{
    public function create (){
        return Inertia::render('Categoria/Create');
    }

    public function store (CategoriaRequest $request){
        $data=$request->all();
        Categorias::create($data);
        return to_route('categoria.index');
    }

    public function index (){
        $categorias = Categorias::orderBy('id')->get();
        return Inertia::render('Categoria/Index',compact('categorias'));
    }

    public function edit(Categorias $categoria){
        
        return Inertia::render('Categoria/Edit', compact('categoria'));
    }

    public function update(CategoriaUpdate $request, Categorias $categoria){
        $data = $request->all();
        $categoria->update($data);
        return to_route('categoria.index');
    }

    public function cambiarEstado(Categorias $categoria){
        $categoria->sn_activo=!$categoria->sn_activo;
        $categoria->save();
        return to_route('categoria.index');
    }

    public function getCategoriasByUserId($userId){
        $categorias = ContactoCategorias::where('id_contacto', $userId)
            ->with('categoria:id,descripcion') // Assuming the relationship is defined in the ContactoCategorias model
            ->get()
            ->map(function ($contactoCategoria) {
                return [
                    'id' => $contactoCategoria->id,
                    'id_contacto' => $contactoCategoria->id_contacto,
                    'categoria_descripcion' => $contactoCategoria->categoria->descripcion ?? null,
                ];
            });

        return response()->json($categorias);
    }
}
