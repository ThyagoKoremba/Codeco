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

Route::middleware('auth')->group(function () {
    Route::get('/imibio', function () {
        return Inertia::render('Imibio/Registros/MonitorGeneral');
    })->name('imibio');
    Route::get('/imibio/proyectos', function () {
        return Inertia::render('Imibio/Registros/MonitorProyectos');
    });
    Route::get('/imibio/actividades', function () {
        return Inertia::render('Imibio/Registros/MonitorActividades');
    });

    Route::get('/imibio/capacitaciones', function () {
        return Inertia::render('Imibio/Capacitaciones/Capacitaciones');
    });

    Route::get('/imibio/proyecto/{id}', function ($id) {
        return Inertia::render('Imibio/Registros/ProyectoGral', ['id' => $id]);
    })->name('proyecto.gral');

    Route::get('/imibio/proyectoDetalle/{id}', function ($id) {
        return Inertia::render('Imibio/Registros/DetalleProyecto', ['id' => $id]);
    })->name('proyecto.detalle');

    Route::get('/imibio/map-proyecto/{id}/{fechaDesde}/{fechaHasta}', function ($id, $fechaDesde, $fechaHasta) {
        return Inertia::render('Imibio/Maps/MapaProyecto', [
            'id' => $id,
            'fechaDesde' => $fechaDesde,
            'fechaHasta' => $fechaHasta,
        ]);
    });
    Route::get('/imibio/map/{fechaDesde}/{fechaHasta}', function ($fechaDesde, $fechaHasta) {
        return Inertia::render('Imibio/Maps/MapaGral', [

            'fechaDesde' => $fechaDesde,
            'fechaHasta' => $fechaHasta,
        ]);
    });

    Route::get('/imibio/map-cap/{fechaDesde}/{fechaHasta}', function ($fechaDesde, $fechaHasta) {
        return Inertia::render('Imibio/Capacitaciones/MapGralCap', [

            'fechaDesde' => $fechaDesde,
            'fechaHasta' => $fechaHasta,
        ]);
    });

    Route::get('/imibio/map-cap-proyecto/{id}/{fechaDesde}/{fechaHasta}', function ($id,  $fechaDesde, $fechaHasta) {
        return Inertia::render('Imibio/Capacitaciones/MapCapProyecto', [

            'id' => $id,
            'fechaDesde' => $fechaDesde,
            'fechaHasta' => $fechaHasta,
        ]);
    });


    Route::get('/imibio/capacitaciones/{id}', function ($id) {
        return Inertia::render('Imibio/Capacitaciones/CapacitacionesProyecto', [

            'id' => $id,

        ]);
    });

    Route::get('/imibio/capacitaciones-proyectos', function () {
        return Inertia::render('Imibio/Capacitaciones/ProyectosCapacitacion');
    });

    Route::get('/imibio/capacitacion-detalle/{id}', function ($id) {
        return Inertia::render('Imibio/Capacitaciones/DetalleCapacitacion', [

            'id' => $id,

        ]);
    });


    Route::get('/imibio/map-nov/{fechaDesde}/{fechaHasta}', function ($fechaDesde, $fechaHasta) {
        return Inertia::render('Imibio/Novedades/MapGralNov', [

            'fechaDesde' => $fechaDesde,
            'fechaHasta' => $fechaHasta,
        ]);
    });

    Route::get('/imibio/map-novedades-proyecto/{id}/{fechaDesde}/{fechaHasta}', function ($id,  $fechaDesde, $fechaHasta) {
        return Inertia::render('Imibio/Novedades/MapProyNov', [

            'id' => $id,
            'fechaDesde' => $fechaDesde,
            'fechaHasta' => $fechaHasta,
        ]);
    });


    Route::get('/imibio/novedades/{id}', function ($id) {
        return Inertia::render('Imibio/Novedades/ProyectoNovedades', [

            'id' => $id,

        ]);
    });

    Route::get('/imibio/novedades-proyectos', function () {
        return Inertia::render('Imibio/Novedades/NovedadesProyectos');
    });

    Route::get('/imibio/novedades-detalle/{id}', function ($id) {
        return Inertia::render('Imibio/Novedades/DetalleNovedadesProyecto', [

            'id' => $id,

        ]);
    });

    Route::get('/imibio/novedades', function () {
        return Inertia::render('Imibio/Novedades/NovedadesGral');
    });
    Route::get('/configuracion/peril-menu,', function ($id) {
        return Inertia::render('configuracion/perfil-menu',[
            'id' => $id,
        ]);
    })->name('perfilmenu.tratamiento');

require __DIR__ . '/auth.php';
require __DIR__ . '/categoria.php';
require __DIR__ . '/contacto.php';
require __DIR__ . '/rol.php';
require __DIR__ . '/actividad.php';
require __DIR__ . '/proyecto.php';
require __DIR__ . '/etiqueta.php';
require __DIR__ . '/productor.php';
require __DIR__ . '/proyectocnfgnotificacion.php';
require __DIR__ . '/usuarioapp.php';
require __DIR__ . '/UsersRoute.php';
require __DIR__ . '/Componente.php';
require __DIR__ . '/Menu.php';
require __DIR__ . '/Perfil.php';
require __DIR__ . '/Configuraciones.php';
});