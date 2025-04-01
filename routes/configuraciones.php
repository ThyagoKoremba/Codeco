<?php

use App\Http\Controllers\EtiquetasController;
use App\Http\Controllers\MenuComponentesController;
use Illuminate\Support\Facades\Route;

Route::prefix('configuracion')->middleware('auth')->group(function () {

    Route::prefix('menu-componentes')->group(function(){
        Route::get('',[MenuComponentesController::class,'tratamientoMenuComponentes'])->name('menucomponentes.tratamiento');
        Route::get('/search-menus', [MenuComponentesController::class, 'searchMenus']);
        Route::get('/search-componentes', [MenuComponentesController::class, 'searchComponentes']);
        Route::get('/{menuId}/componentes', [MenuComponentesController::class, 'getMenuComponentes']);    });
        Route::post('/menu-componentes/actualizar', [MenuComponentesController::class, 'actualizar'])
        ->name('menucomponentes.actualizar');
    Route::post('/agregar', [MenuComponentesController::class, 'agregarComponente'])
    ->name('menucomponentes.agregar');
});