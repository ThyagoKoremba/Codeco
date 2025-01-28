<?php

use App\Http\Controllers\ActividadController;
use App\Http\Controllers\ContactosController;
use App\Models\Actividades;
use Illuminate\Support\Facades\Route;

Route::prefix('contacto')->middleware('auth')->group(function () {
    Route::get('/index',[ContactosController::class,'index'])->name('contacto.index');
    Route::get('/create',[ContactosController::class,'create'])->name('contacto.create');
    Route::post('/',[ContactosController::class,'store'])->name('contacto.store');
    Route::get('/edit/{actividad}',[ContactosController::class,'edit'])->name('contacto.edit');
    Route::put('/update/{actividad}',[ContactosController::class,'update'])->name('contacto.update');
    Route::get('/cambiarEstado/{actividad}',[ContactosController::class,'cambiarEstado'])->name('contacto.cambiarEstado');
});