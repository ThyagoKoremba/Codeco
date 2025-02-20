<?php

use App\Http\Controllers\EtiquetasController;
use Illuminate\Support\Facades\Route;

Route::prefix('etiqueta')->middleware('auth')->group(function () {
    Route::get('/index',[EtiquetasController::class,'index'])->name('etiqueta.index');
    Route::get('/create',[EtiquetasController::class,'create'])->name('etiqueta.create');
    Route::post('/',[EtiquetasController::class,'store'])->name('etiqueta.store');
    Route::get('/edit/{etiqueta}',[EtiquetasController::class,'edit'])->name('etiqueta.edit');
    Route::put('/update/{etiqueta}',[EtiquetasController::class,'update'])->name('etiqueta.update');
    Route::get('/cambiarEstado/{etiqueta}',[EtiquetasController::class,'cambiarEstado'])->name('etiqueta.cambiarEstado');
});