<?php

use App\Http\Controllers\PerfilController;
use Illuminate\Support\Facades\Route;

Route::prefix('perfil')->middleware('auth')->group(function () {
    Route::get('/',[PerfilController::class,'vista'])->name('perfil.vista');
    Route::post('/',[PerfilController::class,'store'])->name('perfil.store');
    Route::get('/edit/{perfil}',[PerfilController::class,'edit'])->name('perfil.edit');
    Route::put('/update/{perfil}',[PerfilController::class,'update'])->name('perfil.update');
    Route::get('/cambiarEstado/{perfil}',[PerfilController::class,'cambiarEstado'])->name('perfil.cambiarEstado');

});