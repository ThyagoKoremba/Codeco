<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('igbmregistroctrl', function (Blueprint $table) {
            $table->id('idctrl');
            $table->string('registrouuidctrl',36)->nullable()->default(null);
            $table->dateTime('fechayhoraregistroctrl')->nullable()->default(null);
            $table->integer('idapps')->nullable()->default(null);
            $table->string('registroapps',36)->unique()->nullable()->default(null);
            $table->date('fecharegistroapps')->nullable()->default(null);
            $table->time('horaregistroapps')->nullable()->default(null);
            $table->datetime('fechacaptura')->nullable()->default(null);
            $table->unsignedBigInteger('usuarioid')->nullable()->default(null);
            $table->foreign('usuarioid','FK_usuarioid_igbmregistroctrl')
            ->references('id')->on('users'); 
            $table->unsignedBigInteger('proyectoid')->nullable()->default(null);
            $table->foreign('proyectoid','FK_proyectoid_igbmregistroctrl')
            ->references('id')->on('proyectos'); 
            $table->unsignedBigInteger('rolid')->nullable()->default(null);
            $table->foreign('rolid','FK_rolid_igbmregistroctrl')
            ->references('id')->on('roles'); 
            $table->unsignedBigInteger('actividadid')->nullable()->default(null);
            $table->foreign('actividadid','FK_actividadid_igbmregistroctrl')
            ->references('id')->on('actividades'); 
            $table->unsignedBigInteger('productorid')->nullable()->default(1);
            $table->foreign('productorid','FK_productorid_igbmregistroctrl')
            ->references('id')->on('productores'); 
            $table->string('titulo',45)->nullable()->default(null);
            $table->longText('descripcion')->nullable()->default(null);
            $table->string('referencia',45)->nullable()->default(null);
            $table->unsignedBigInteger('etiquetaid')->nullable()->default(1);
            $table->foreign('etiquetaid','FK_etiquetaid_igbmregistroctrl')
            ->references('id')->on('etiquetas');
            $table->double('latitud')->nullable()->default(null);
            $table->double('longitud')->nullable()->default(null);
            $table->string('imagennombre',45)->nullable()->default(null);
            $table->integer('imagencantidad')->default(0);
            $table->boolean('procesadosc')->default(0);
            $table->boolean('imagenenviadasn')->default(0);
            $table->string('pathmultimedia',100)->nullable()->default(null);
            $table->longText('patronbusqueda')->nullable()->default(null);
            $table->timestamps();
            $table->index(['idapps','registroapps'],'apps_iduuid_IDX');
            $table->index('registrouuidctrl','registrouuidctrl_IDX');
            $table->index('idctrl','idctrl_IDX');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('igbmregistroctrl');
    }
};
