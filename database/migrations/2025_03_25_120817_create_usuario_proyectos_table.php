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
        Schema::create('usuarioproyectos', function (Blueprint $table) {
            $table->unsignedBigInteger('usuarioid')->notNullable();
            $table->foreign('usuarioid')->references('id')->on('users');
            $table->unsignedBigInteger('proyectoid')->notNullable();
            $table->foreign('proyectoid')->references('id')->on('proyectos');
            $table->primary(['usuarioid','proyectoid']);
            $table->dateTime('updatetime')->default(null);
            $table->boolean('activosn')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarioproyectos');
    }
};
