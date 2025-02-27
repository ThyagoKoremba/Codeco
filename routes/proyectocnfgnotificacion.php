<?php

use App\Http\Controllers\ProyectoCnfgNotificacionController;
use Illuminate\Support\Facades\Route;

Route::prefix('configuracion/proyectos')->middleware('auth')->group(function () {
    Route::get('/index',[ProyectoCnfgNotificacionController::class,'index'])->name('proyectocnfgnotificacion.index');
    Route::get('/create',[ProyectoCnfgNotificacionController::class,'create'])->name('proyectocnfgnotificacion.create');
    Route::post('/',[ProyectoCnfgNotificacionController::class,'store'])->name('proyectocnfgnotificacion.store');
    Route::get('/edit/{proyectonotif}',[ProyectoCnfgNotificacionController::class,'edit'])->name('proyectocnfgnotificacion.edit');
    Route::put('/update/{proyectonotif}',[ProyectoCnfgNotificacionController::class,'update'])->name('proyectocnfgnotificacion.update');
    Route::get('/cambiarEstado/{proyectonotif}',[ProyectoCnfgNotificacionController::class,'cambiarEstado'])->name('proyectocnfgnotificacion.cambiarEstado');
    Route::get('/search-proyecto', [ProyectoCnfgNotificacionController::class, 'searchProyecto']);
});