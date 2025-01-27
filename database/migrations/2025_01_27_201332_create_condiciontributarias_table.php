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
        Schema::create('condiciontributarias', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion',255);
            $table->string('abreviatura',255);
            $table->boolean('sn_identidadtributaria')->nullable();
            $table->boolean('sn_condiciontributaria')->nullable();
            $table->integer('id_tributaria_afip')->nullable();
            $table->boolean('sn_registrosistema')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('condiciontributarias');
    }
};
