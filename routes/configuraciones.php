<?php

use App\Http\Controllers\EtiquetasController;
use App\Http\Controllers\MenuComponentesController;
use App\Http\Controllers\PerfilMenuController;
use App\Models\PerfilMenu;
use Illuminate\Support\Facades\Route;

Route::prefix('configuracion')->middleware('auth')->group(function () {

    /*
    *
    RUTAS MENU-COMPONENTES
    *
    */
    Route::prefix('menu-componentes')->group(function () {
        Route::get('', [MenuComponentesController::class, 'tratamientoMenuComponentes'])->name('menucomponentes.tratamiento');
        Route::get('/search-menus', [MenuComponentesController::class, 'searchMenus']);
        Route::get('/search-componentes', [MenuComponentesController::class, 'searchComponentes']);
        Route::get('/{menuId}/componentes', [MenuComponentesController::class, 'getMenuComponentes']);
        Route::post('/actualizar', [MenuComponentesController::class, 'actualizar'])
            ->name('menucomponentes.actualizar');
        Route::post('/agregar', [MenuComponentesController::class, 'agregarComponente'])
            ->name('menucomponentes.agregar');
    });

    /*
    *   
    RUTAS PERFIL-MENU   
    *
    */
    Route::prefix('perfil-menu')->group(function(){
        Route::get('',[PerfilMenuController::class, 'tratamientoPerfilMenu'])->name('perfilmenu.tratamiento');
        Route::get('/search-menus',[PerfilMenuController::class,'searchMenus']);
        Route::get('/search-perfil',[PerfilMenuController::class,'searchPerfil']);
        Route::post('/',[PerfilMenuController::class,'store'])->name('perfilmenu.store');
        Route::get('/perfil-menu-data', [PerfilMenuController::class, 'getAllPerfilMenuData']);
        Route::get('/perfil-nulls', [PerfilMenuController::class, 'getPerfilesWithNullRelation']);
    });

});
