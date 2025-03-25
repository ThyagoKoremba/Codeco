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
        Schema::create('usuarioproyectosrolesactividades', function (Blueprint $table) {
            $table->unsignedBigInteger('usuarioid');
            $table->foreign('usuarioid')->references('id')->on('users');
            $table->index('usuarioid','usuarioid_IDX_upra');
            $table->unsignedBigInteger('proyectoid');
            $table->foreign('proyectoid')->references('id')->on('proyectos');
            $table->unsignedBigInteger('rolid');
            $table->foreign('rolid')->references('id')->on('roles');
            $table->unsignedBigInteger('actividadid');
            $table->foreign('actividadid')->references('id')->on('actividades');
            $table->primary(['usuarioid','proyectoid','rolid','actividadid']);
            $table->boolean('activosn')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarioproyectosrolesactividades');
    }
};
