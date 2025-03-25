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
        Schema::create('proyectosactividades', function (Blueprint $table) {
            $table->unsignedBigInteger('proyectoid')->notNullable();
            $table->foreign('proyectoid')
            ->references('id')->on('proyectos'); 
            $table->index('proyectoid','proyectoid_IDX_pa');
            $table->unsignedBigInteger('actividadid')->notNullable();
            $table->foreign('actividadid')
            ->references('id')->on('actividades'); 
            $table->primary(['proyectoid','actividadid']);
            $table->integer('ordenejecuciondefault')->notNullable()->default(0);
            $table->string('identificadorproyecto',36)->notNullable();
            $table->boolean('activosn')->notNullable()->default(1);
            $table->boolean('productoridsn')->notNullable();
            $table->integer('productoriddefault')->default(1)->notNullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectosactividades');
    }
};
