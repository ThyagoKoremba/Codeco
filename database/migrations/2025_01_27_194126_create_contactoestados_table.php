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
        Schema::create('contactoestados', function (Blueprint $table) {
            $table->id();
            $table->string('descripcion',45);
            $table->string('abreviatura',45)->nullable();
            $table->string('abreviatura_corta',3)->nullable();
            $table->boolean('sn_activo')->default(0)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contactoestados');
    }
};
