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
        Schema::create('proyectosproductores', function (Blueprint $table) {
            $table->unsignedBigInteger('proyectoid')->notNullable();
            $table->foreign('proyectoid')->references('id')->on('proyectos');
            $table->unsignedBigInteger('productorid')->notNullable(); 
            $table->foreign('productorid')->references('id')->on('productores');
            $table->primary(['proyectoid','productorid']);
            $table->string('identificadorproyecto',36)->notNullable();
            $table->boolean('activosn')->notNullable()->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectosproductores');
    }
};
