<?php

use App\Http\Controllers\CondiciontributariasController;
use App\Http\Controllers\FisicojuridicosController;
use App\Http\Controllers\GeopaisController;
use App\Http\Controllers\IdentidadesController;
use Illuminate\Support\Facades\Route;

Route::prefix('api')->middleware('auth')->group(function () {
    Route::get('/fisicojuridico',[FisicojuridicosController::class,'index'])->name('fisicojuridico.index');
    Route::get('/pais',[GeopaisController::class,'index'])->name('geopais.index');
    Route::get('/identidades',[IdentidadesController::class,'index'])->name('identidades.index');
    Route::get('/condiciontributarias',[CondiciontributariasController::class,'index'])->name('condiciontributarias.index');
});