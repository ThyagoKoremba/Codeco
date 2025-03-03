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
        Schema::create('perfil_componentes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_componente');
            $table->unsignedBigInteger('id_perfil');
            $table->boolean('activo')->default(false);
            $table->foreign('id_perfil','FK_id_perfil_perfilcomponentes')->references('id')->on('perfiles')->onDelete('cascade');
            $table->foreign('id_componente','FK_id_componente_perfilcomponentes')->references('id')->on('componentes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perfil_componentes');
    }
};
