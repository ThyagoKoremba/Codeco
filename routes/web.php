<?php

use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('dashboard')->middleware('auth')->group(function(){
    Route::get('/contact',[ContactController::class,'index'])->name('contact.index');
    Route::get('/contact/create',[ContactController::class,'create'])->name('contact.create');
    Route::post('/contact',[ContactController::class,'store'])->name('contact.store');
    Route::get('/contact/{contact}/edit',[ContactController::class,'edit'])->name('contact.edit');
    Route::put('contact/{contact}/store',[ContactController::class,'update'])->name('contact.update');
    Route::delete('contact/{contact}',[ContactController::class,'destroy'])->name('contact.destroy');
});




require __DIR__.'/auth.php';
require __DIR__.'/categoria.php';
require __DIR__.'/contacto.php';
require __DIR__.'/api_front.php';