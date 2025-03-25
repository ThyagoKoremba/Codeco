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
        Schema::create('proyectosrolesactividades', function (Blueprint $table) {
            $table->unsignedBigInteger('proyectoid')->notNullable();
            $table->foreign('proyectoid')->references('id')->on('proyectos');
            $table->index('proyectoid','proyectoid_IDX_pra');
            $table->unsignedBigInteger('rolid')->notNullable();
            $table->foreign('rolid')->references('id')->on('roles');
            $table->unsignedBigInteger('actividadid')->notNullable();
            $table->foreign('actividadid')->references('id')->on('actividades');
            $table->primary(['proyectoid','rolid','actividadid']);
            $table->string('identificadorproyecto',36)->notNullable();
            $table->integer('ordenejecucion')->notNullable()->default(0);
            $table->boolean('activosn')->default(1)->notNullable();
            $table->boolean('informarproductorsn')->default(0)->notNullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectosrolesactividades');
    }
};
