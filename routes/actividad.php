<?php

use App\Http\Controllers\ActividadController;
use App\Models\Actividades;
use Illuminate\Support\Facades\Route;

Route::prefix('actividad')->middleware('auth')->group(function () {
    Route::get('/',[ActividadController::class,'index'])->name('actividad.index');
    Route::post('/',[ActividadController::class,'store'])->name('actividad.store');
    Route::put('/update/{actividad}',[ActividadController::class,'update'])->name('actividad.update');
    Route::get('/cambiarEstado/{actividad}',[ActividadController::class,'cambiarEstado'])->name('actividad.cambiarEstado');
});