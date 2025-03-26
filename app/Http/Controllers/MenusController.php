<?php

namespace App\Http\Controllers;

use App\Http\Requests\Menu\MenuRequest;
use App\Http\Requests\Menu\MenuUpdate;
use App\Models\Componentes;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenusController extends Controller
{
    public function create()
    {
        $componentes = Componentes::all();
        return Inertia::render('Menu/Create', compact('componentes'));
    }

    public function store(MenuRequest $request)
    {
        $menu = new Menu;
        $menu->nombre = $request->nombre;
        $menu->abreviatura = $request->abreviatura;
        $menu->informacion = $request->informacion;
        $menu->sn_activo = $request->sn_activo;
        $menu->save();

        if ($request->has('componentes')) {
            $componentesSeleccionados = $request->componentes;

            $componentesConActivo = [];

            foreach ($componentesSeleccionados as $componenteId) {
                $componentesConActivo[$componenteId] = ['activo' => 1];
            }

            $menu->componentes()->sync($componentesConActivo);
        }
        return redirect()->route('menu.vista');
    }

    public function vista()
    {
        $menus = Menu::all();
        return Inertia::render('Menu/Vista', compact('menus'));
    }

    public function edit(Menu $menu)
    {
        $menu->load('componentes'); 
        $componentes = Componentes::all();

        return Inertia::render('Menu/Edit', compact('menu', 'componentes'));
    }

    public function update(MenuUpdate $request, Menu $menu)
    {
        $data = $request->all();
        $menu->update($data);

        $componentesSeleccionados = $request->componentes ?? [];

        $componentesConActivo = [];
        foreach ($componentesSeleccionados as $componenteId) {
            $componentesConActivo[$componenteId] = ['activo' => 1];
        }

        $menu->componentes()->sync($componentesConActivo);
        return redirect()->route('menu.vista');
    }

    public function cambiarEstado(Menu $menu)
    {
        $menu->sn_activo = !$menu->sn_activo;
        $menu->save();
        return redirect()->route('menu.vista');
    }
}
