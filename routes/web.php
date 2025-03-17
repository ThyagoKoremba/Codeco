<?php

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


Route::get('/imibio', function () {
    return Inertia::render('Imibio/Registros/MonitorGeneral');
})->name('imibio');
Route::get('/imibio/proyectos', function () {
    return Inertia::render('Imibio/Registros/MonitorProyectos');
});
Route::get('/imibio/actividades', function () {
    return Inertia::render('Imibio/Registros/MonitorActividades');
});

Route::get('/imibio/proyecto/{id}', function ($id) {
    return Inertia::render('Imibio/Registros/ProyectoGral', ['id' => $id]);
})->name('proyecto.gral');

Route::get('/imibio/proyectoDetalle/{id}', function ($id) {
    return Inertia::render('Imibio/Registros/DetalleProyecto', ['id' => $id]);
})->name('proyecto.detalle');



require __DIR__.'/auth.php';
require __DIR__.'/categoria.php';
require __DIR__.'/contacto.php';
require __DIR__.'/api_front.php';
require __DIR__.'/rol.php';
require __DIR__.'/actividad.php';
