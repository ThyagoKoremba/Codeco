<?php

use App\Http\Controllers\ProyectocnfgnotificacionController;
use Illuminate\Support\Facades\Route;

Route::prefix('proyectocnfgnotificacion')->middleware('auth')->group(function () {
    Route::get('/index',[ProyectocnfgnotificacionController::class,'index'])->name('proyectocnfgnotificacion.index');
    Route::get('/create',[ProyectocnfgnotificacionController::class,'create'])->name('proyectocnfgnotificacion.create');
    Route::post('/',[ProyectocnfgnotificacionController::class,'store'])->name('proyectocnfgnotificacion.store');
    Route::get('/edit/{proyectocnfgnotificacion}',[ProyectocnfgnotificacionController::class,'edit'])->name('proyectocnfgnotificacion.edit');
    Route::put('/update/{proyectocnfgnotificacion}',[ProyectocnfgnotificacionController::class,'update'])->name('proyectocnfgnotificacion.update');
    Route::get('/cambiarEstado/{proyectocnfgnotificacion}',[ProyectocnfgnotificacionController::class,'cambiarEstado'])->name('proyectocnfgnotificacion.cambiarEstado');

    Route::get('/search-proyecto', [ProyectocnfgnotificacionController::class, 'searchProyecto']);
});