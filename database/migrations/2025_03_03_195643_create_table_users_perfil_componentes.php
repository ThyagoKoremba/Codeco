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
        Schema::create('user_perfil_componentes', function (Blueprint $table) {
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('id_perfil_componentes');
            $table->primary(['id_user', 'id_perfil_componentes']);
            $table->boolean('activo')->default(true);
            $table->foreign('id_perfil_componentes','FK_id_perfil_userperfilcomponentes')->references('id')->on('perfil_componentes')->onDelete('cascade');
            $table->foreign('id_user','FK_id_user_userperfilcomponentes')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_perfil_componentes');
    }
};
