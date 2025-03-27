<?php

namespace App\Http\Controllers;

use App\Models\Componentes;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuComponentesController extends Controller
{
    public function tratamientoMenuComponentes (){ 
        $menus=Menu::all();
        $componentes=Componentes::all();
        return Inertia::render('MenuComponentes/Tratamiento',compact('menus,componnetes'));
    }

    
}
