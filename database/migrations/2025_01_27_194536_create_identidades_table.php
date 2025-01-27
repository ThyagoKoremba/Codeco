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
        Schema::create('identidades', function (Blueprint $table) {
            $table->id()->index('IDX_id_identidad');
            $table->string('descripcion',20);
            $table->string('abreviatura',8);
            $table->string('dato_mascara',50)->nullable();
            $table->string('dato_default',45)->nullable();
            $table->boolean('sn_fisica')->nullable();
            $table->boolean('sn_juridica')->nullable();
            $table->boolean('sn_identidadtributaria')->nullable();
            $table->boolean('sn_activo')->nullable();
            $table->boolean('sn_registro_sistema')->nullable();
            $table->integer('id_pais')->nullable()->index('IDX_id_pais_identidad');
            $table->foreignId('id_pais_identidad')->constrained('geopais','id')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('identidades');
    }
};
