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
        Schema::create('perfiles_menus', function (Blueprint $table) {
            $table->unsignedBigInteger('id_perfil');
            $table->unsignedBigInteger('id_menu');
            $table->primary(['id_perfil','id_menu']);
            $table->boolean('sn_activo')->default(false);
            $table->timestamps();
            
            $table->foreign('id_menu')->references('id')->on('menus')->onDelete('cascade');
            $table->foreign('id_perfil')->references('id')->on('perfiles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('perfiles_menus');
    }
};
