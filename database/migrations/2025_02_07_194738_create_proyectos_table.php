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
        Schema::create('proyectos', function (Blueprint $table) {
            $table->id();
            $table->uuid('identificadorproyecto',36)->unique()->index('idenficicadorproyecto_IDX');
            $table->string('proyectonombre', 100);
            $table->string('proyectoabreviatura', 45);
            $table->date('fechainicio')->nullable();
            $table->date('fechafinalizacion')->nullable();
            $table->boolean('activosn')->default(0);
            $table->string('patronbusqueda')->nullable()->index('patronbusqueda_IDX');
            $table->boolean('productoressn')->nullable();
            $table->text('proyectodescripcion')->nullable();
            $table->text('url_carpeta_config')->nullable();
            $table->string('img_icon_gps',45)->nullable();
            $table->string('img_web',255)->nullable();
            $table->string('img_app_carrusel',255)->nullable();
            $table->string('img_app_encabezado',255)->nullable();
            $table->string('gps_popup_color',45)->nullable();
            $table->text('url_carpeta_destino_img')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        
        Schema::dropIfExists('proyectos');
    }
};
