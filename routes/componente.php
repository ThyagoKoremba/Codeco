<?php

use App\Http\Controllers\ComponenteController;
use App\Http\Controllers\EtiquetasController;
use Illuminate\Support\Facades\Route;

Route::prefix('componente')->middleware('auth')->group(function () {
    Route::get('/vista',[ComponenteController::class,'vista'])->name('componente.vista');
    Route::get('/create',[ComponenteController::class,'create'])->name('componente.create');
    Route::post('/',[ComponenteController::class,'store'])->name('componente.store');
    Route::get('/edit/{componente}',[ComponenteController::class,'edit'])->name('componente.edit');
    Route::put('/update/{componente}',[ComponenteController::class,'update'])->name('componente.update');
    Route::get('/cambiarEstado/{componente}',[ComponenteController::class,'cambiarEstado'])->name('componente.cambiarEstado');
});