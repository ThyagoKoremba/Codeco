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
        Schema::create('contactocategorias', function (Blueprint $table) {
            $table->unsignedBigInteger('id_contacto');
            $table->foreign('id_contacto','FK_id_contacto_contactocategoria')
            ->references('id')->on('contactos'); 
            $table->index('id_contacto','IDX_id_contacto_contactocategoria');
            $table->unsignedBigInteger('id_categoria');
            $table->foreign('id_categoria','FK_id_categoria_contactocategoria')
            ->references('id')->on('categorias'); 
            $table->index('id_categoria','IDX_id_categoria_contactocategoria');
            $table->unsignedBigInteger('id_identidad')->default(1);
            $table->primary(['id_contacto','id_categoria']);
            $table->string('id_dato',10)->default(0);
            $table->boolean('sn_activo')->default(0);
            $table->unsignedBigInteger('id_user_created_at')->default(1);
            $table->index('id_user_created_at','IDX_id_user_created_at_contactocategorias');
            $table->unsignedBigInteger('id_user_updated_at')->default(1);
            $table->index('id_user_updated_at','IDX_id_user_updated_at_contactocategorias');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contactocategorias');
    }
};
