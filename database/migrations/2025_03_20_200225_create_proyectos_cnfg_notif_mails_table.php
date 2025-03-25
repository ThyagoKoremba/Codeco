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
        Schema::create('proyectoscnfgnotifmail', function (Blueprint $table) {
            $table->unsignedBigInteger('proyectoid')->notNullable();
            $table->foreign('proyectoid')
            ->references('id')->on('proyectos'); 
            $table->primary('proyectoid');
            $table->string('mail_notificador',45)->default(null);
            $table->string('mail_clave',45)->default(null);
            $table->boolean('sn_activo')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proyectoscnfgnotifmail');
    }
};
