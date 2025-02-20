<?php

use App\Http\Controllers\ProductoresController;
use Illuminate\Support\Facades\Route;

Route::prefix('productor')->middleware('auth')->group(function () {
    Route::get('/index',[ProductoresController::class,'index'])->name('productor.index');
    Route::get('/create',[ProductoresController::class,'create'])->name('productor.create');
    Route::post('/',[ProductoresController::class,'store'])->name('productor.store');
    Route::get('/edit/{productor}',[ProductoresController::class,'edit'])->name('productor.edit');
    Route::put('/update/{productor}',[ProductoresController::class,'update'])->name('productor.update');
    Route::get('/cambiarEstado/{productor}',[ProductoresController::class,'cambiarEstado'])->name('productor.cambiarEstado');
});