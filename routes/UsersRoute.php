<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/componentes', [UserController::class, 'getUserPerfilComponentes'])->middleware(['auth', 'verified']);