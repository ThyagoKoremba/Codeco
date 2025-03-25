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
        Schema::create('proyectosroles', function (Blueprint $table) {
            $table->unsignedBigInteger('proyectoid')->notNullable();
            $table->index('proyectoid','proyecto_IDX_rp');
            $table->foreign('proyectoid')->references('id')->on('proyectos');
            $table->unsignedBigInteger('rolid')->notNullable();
            $table->foreign('rolid')->references('id')->on('roles');
            $table->primary(['proyectoid','rolid']);
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
        Schema::dropIfExists('proyectosroles');
    }
};
