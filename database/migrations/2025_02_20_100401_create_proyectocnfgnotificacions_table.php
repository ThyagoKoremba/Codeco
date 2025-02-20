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
        Schema::create('proyectoscnfgnotificacion', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('proyectoid');
            $table->boolean('sn_mail_notificacion');
            $table->string('mail_notificacion')->nullable();
            $table->boolean('sn_movil_notificacion');
            $table->string('movil_notificacion')->nullable();
            $table->boolean('sn_activo');
            $table->timestamps();
            $table->foreign('proyectoid')->references('id')->on('proyectos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectocnfgnotificacion');
    }
};
