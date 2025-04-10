<?php

use App\Http\Controllers\ComponenteController;
use App\Http\Controllers\EtiquetasController;
use Illuminate\Support\Facades\Route;

Route::prefix('componente')->middleware('auth')->group(function () {
    Route::get('/',[ComponenteController::class,'vista'])->name('componente.vista');
    Route::post('/',[ComponenteController::class,'store'])->name('componente.store');
    Route::put('/update/{componente}',[ComponenteController::class,'update'])->name('componente.update');
    Route::get('/cambiarEstado/{componente}',[ComponenteController::class,'cambiarEstado'])->name('componente.cambiarEstado');
});