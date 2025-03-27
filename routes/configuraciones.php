<?php

use App\Http\Controllers\EtiquetasController;
use App\Http\Controllers\MenuComponentesController;
use Illuminate\Support\Facades\Route;

Route::prefix('configuracion')->middleware('auth')->group(function () {

    Route::prefix('menu-componentes')->group(function(){
        Route::get('/tratamiento',[MenuComponentesController::class,'tratamiento'])->name('menucomponente.tratamiento');
    });

});