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
        Schema::create('geopais', function (Blueprint $table) {
            $table->id();
            $table->string('nombre',255);
            $table->string('abreviatura',255);
            $table->boolean('sn_activo')->default(0)->nullable();
            $table->string('isonumero',255)->default(0)->nullable();
            $table->string('iso2',255)->default(0)->nullable();
            $table->string('iso3',255)->default(0)->nullable();
            $table->string('ddi',255)->default(0)->nullable();
            $table->boolean('sn_provincia_determinada')->default(0)->nullable();
            $table->integer('id_provincia_determinada')->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('geopais');
    }
};
