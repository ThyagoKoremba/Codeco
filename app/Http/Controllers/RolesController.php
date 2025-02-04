<?php

namespace App\Http\Controllers;

use App\Http\Requests\Rol\RolRequest;
use App\Http\Requests\Rol\RolUpdate;
use App\Models\Roles as ModelsRoles;
use Inertia\Inertia;
use Roles;

class RolesController extends Controller
{
    public function create (){
        return Inertia::render('Rol/Create');
    }

    public function store (RolRequest $request){
        $data=$request->all();
        ModelsRoles::create($data);
        return to_route('rol.index');
    }

    public function index (){
        $roles = ModelsRoles::orderBy('id')->get();
        return Inertia::render('Rol/Index',compact('roles'));
    }

    public function edit (ModelsRoles $rol){
        return Inertia::render('Rol/Edit',compact('rol'));
    }

    public function update (RolUpdate $request, ModelsRoles $rol){ 
        $data = $request->all();
        $rol->update($data);
        return to_route('rol.index');
    }

    public function cambiarEstado (ModelsRoles $rol){
        $rol->activosn=!$rol->activosn;
        $rol->save();
        return to_route('rol.index');
    }
}
