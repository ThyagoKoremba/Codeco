<?php

use App\Http\Controllers\ComponenteController;
use App\Http\Controllers\EtiquetasController;
use App\Http\Controllers\MenusController;
use Illuminate\Support\Facades\Route;

Route::prefix('menu')->middleware('auth')->group(function () {
    Route::get('/vista',[MenusController::class,'vista'])->name('menu.vista');
    Route::get('/create',[MenusController::class,'create'])->name('menu.create');
    Route::post('/',[MenusController::class,'store'])->name('menu.store');
    Route::get('/edit/{menu}',[MenusController::class,'edit'])->name('menu.edit');
    Route::put('/update/{menu}',[MenusController::class,'update'])->name('menu.update');
    Route::get('/cambiarEstado/{menu}',[MenusController::class,'cambiarEstado'])->name('menu.cambiarEstado');

    Route::get('/search-componentes', [MenusController::class, 'searchComponentes']);
});