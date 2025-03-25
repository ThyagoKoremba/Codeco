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
        Schema::create('movilusuarioctrl', function (Blueprint $table) {
            $table->id();
            $table->string('useruuid',36)->nullable()->default(null);
            $table->string('marcamodelo',255)->nullable()->default(null);
            $table->string('sistemaoperativoversion',255)->nullable()->default(null);
            $table->string('screenresolution',45)->nullable()->default(null);
            $table->integer('screendensity')->nullable()->default(null);
            $table->dateTime('fechahora')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movilusuarioctrl');
    }
};
