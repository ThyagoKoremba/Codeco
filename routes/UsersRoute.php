<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/componentes', [UserController::class, 'getPerfilesMenusComponentesExceptuadosByUser'])->middleware(['auth', 'verified']);