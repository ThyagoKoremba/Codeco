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
        Schema::create('proyectosnotificaciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('idctrl')->notNullable();
            $table->foreign('idctrl')->references('idctrl')->on('igbmregistroctrl');
            $table->boolean('sn_notificado')->default(0);
            $table->datetime('fecha_notificado')->default(null);
            $table->boolean('sn_en_proceso')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectosnotificaciones');
    }
};
