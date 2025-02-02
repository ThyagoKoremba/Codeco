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
        Schema::create('fisicojuridicos', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion',45);
            $table->string('abeviatura',45);
            $table->string('abeviatura_corta',3);
            $table->boolean('sn_fecha_nacimiento')->default(0)->nullable();
            $table->boolean('sn_nacionalidad')->default(0)->nullable();
            $table->boolean('sn_situacioncivil')->default(0)->nullable();
            $table->boolean('sn_segundonombre')->default(0)->nullable();
            $table->string('texto_apellido',45)->nullable();
            $table->string('texto_nombre',45)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fisicojuridicos');
    }
};
