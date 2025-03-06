<?php


use App\Http\Controllers\UsuarioAppController;
use Illuminate\Support\Facades\Route;

Route::prefix('usuario/app')->middleware('auth')->group(function () {
    Route::get('/index',[UsuarioAppController::class,'index'])->name('usuarioapp.index');
    Route::get('/create',[UsuarioAppController::class,'create'])->name('usuarioapp.create');
    Route::post('/',[UsuarioAppController::class,'store'])->name('usuarioapp.store');
    Route::get('/edit/{usuarioapp}',[UsuarioAppController::class,'edit'])->name('usuarioapp.edit');
    Route::put('/update/{usuarioapp}',[UsuarioAppController::class,'update'])->name('rol.update');
    Route::get('/cambiarEstado/{usuarioapp}',[UsuarioAppController::class,'cambiarEstado'])->name('usuarioapp.cambiarEstado');
});