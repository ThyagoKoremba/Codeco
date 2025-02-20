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
        Schema::create('productores', function (Blueprint $table) {
            $table->id();
            $table->integer('usuarioid')->default(1);
            $table->uuid('usuariocodigouuid',36)->nullable()->index('usuariocodigouuid_IDX');
            $table->string('apellido',255);
            $table->string('nombres',255)->nullable();
            $table->string('dnicuit',14)->nullable();
            $table->string('mail',255)->nullable();
            $table->string('telefono',45)->nullable();
            $table->boolean('activosn')->nullable();
            $table->string('patronbusqueda')->nullable()->index('patronbusqueda_IDX'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productores');
    }
};
