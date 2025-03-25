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
        Schema::create('proyectosetiquetas', function (Blueprint $table) {
            $table->unsignedBigInteger('proyectoid')->notNullable();
            $table->foreign('proyectoid')
            ->references('id')->on('proyectos'); 
            $table->index('proyectoid','idx_proyectoid_pe');
            $table->unsignedBigInteger('etiquetaid')->notNullable();
            $table->foreign('etiquetaid')
            ->references('id')->on('etiquetas');
            $table->primary(['proyectoid','etiquetaid']);
            $table->boolean('activosn')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectosetiquetas');
    }
};
