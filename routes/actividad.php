<?php

use App\Http\Controllers\ActividadController;
use App\Models\Actividades;
use Illuminate\Support\Facades\Route;

Route::prefix('actividad')->middleware('auth')->group(function () {
    Route::get('/index',[ActividadController::class,'index'])->name('actividad.index');
    Route::get('/create',[ActividadController::class,'create'])->name('actividad.create');
    Route::post('/',[ActividadController::class,'store'])->name('actividad.store');
    Route::get('/edit/{actividad}',[ActividadController::class,'edit'])->name('actividad.edit');
    Route::put('/update/{actividad}',[ActividadController::class,'update'])->name('actividad.update');
    Route::get('/cambiarEstado/{actividad}',[ActividadController::class,'cambiarEstado'])->name('actividad.cambiarEstado');
});