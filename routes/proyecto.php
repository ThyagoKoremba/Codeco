<?php

use App\Http\Controllers\ProyectosController;
use Illuminate\Support\Facades\Route;

Route::prefix('proyecto')->middleware('auth')->group(function () {
    Route::get('/index',[ProyectosController::class,'index'])->name('proyecto.index');
    Route::get('/create',[ProyectosController::class,'create'])->name('proyecto.create');
    Route::post('/',[ProyectosController::class,'store'])->name('proyecto.store');
    Route::get('/edit/{proyecto}',[ProyectosController::class,'edit'])->name('proyecto.edit');
    Route::put('/update/{proyecto}',[ProyectosController::class,'update'])->name('proyecto.update');
    Route::get('/cambiarEstado/{proyecto}',[ProyectosController::class,'cambiarEstado'])->name('proyecto.cambiarEstado');
});