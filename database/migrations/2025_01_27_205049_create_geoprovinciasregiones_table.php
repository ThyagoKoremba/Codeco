<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function GuzzleHttp\default_ca_bundle;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('geoprovinciasregiones', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion',50)->index('IDX_descripcion_geoprovinciasregiones');
            $table->string('abreviatura',25);
            $table->boolean('sn_activo')->nullable();
            $table->string('provincia_iso2',45)->nullable();
            $table->boolean('sn_registrosistema')->nullable();
            $table->boolean('sn_id_departamento')->nullable();
            $table->integer('id_departamento_predetermindo')->default(1)->index('IDX_id_departamento_geoprovinciasregiones');
            $table->integer('id_pais')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('geoprovinciasregiones');
    }
};
