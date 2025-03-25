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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->uuid('usuariocodigouuid', 36)->unique()->nullable();
            $table->string('dnicuit', 14)->index('dnicuit_IDX');
            $table->string('nombres', 255);
            $table->string('apellido', 255);
            $table->string('usuario', 45)->unique()->index('usuario_IDX');
            $table->string('clave', 45);
            $table->string('mail', 255)->unique()->index('mail_IDX');
            $table->string('telefono', 45)->nullable();
            $table->boolean('activosn')->default(0)->nullable();
            $table->boolean('modedemosn')->default(1);
            $table->text('observaciones', 255)->nullable();
            $table->unsignedBigInteger('productorid')->default(1)->index('fk_productorid');
            $table->foreign('productorid')->references('id')->on('productores');
            $table->date('vigenciahasta')->nullable();
            $table->string('patronbusqueda', 255)->nullable();
            $table->dateTime('updateusuarioctrl')->nullable();
            $table->dateTime('updateusuarioapp')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
