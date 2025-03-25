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
        Schema::create('tagsreferencias', function (Blueprint $table) {
            $table->id();   
            $table->string('descripcion',45)->notNullable();
            $table->string('abreviatura',10)->notNullable();
            $table->string('abreviatura_corta',3)->notNullable();
            $table->boolean('sn_activo')->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tagsreferencias');
    }
};
