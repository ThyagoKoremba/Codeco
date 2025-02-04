<?php

use App\Http\Controllers\RolesController;
use Illuminate\Support\Facades\Route;

Route::prefix('rol')->middleware('auth')->group(function () {
    Route::get('/index',[RolesController::class,'index'])->name('rol.index');
    Route::get('/create',[RolesController::class,'create'])->name('rol.create');
    Route::post('/',[RolesController::class,'store'])->name('rol.store');
    Route::get('/edit/{rol}',[RolesController::class,'edit'])->name('rol.edit');
    Route::put('/update/{rol}',[RolesController::class,'update'])->name('rol.update');
    Route::get('/cambiarEstado/{rol}',[RolesController::class,'cambiarEstado'])->name('rol.cambiarEstado');
});