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
        Schema::create('contactobancos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_contacto');
            $table->foreign('id_contacto','FK_id_contacto_contactobancos')
            ->references('id')->on('contactos'); 
            $table->index('id_contacto','IDX_id_contacto_contactobancos');
            $table->unsignedBigInteger('id_banco');
            $table->foreign('id_banco','FK_id_banco_contactobancos')
            ->references('id')->on('contactos'); 
            $table->index('id_banco','IDX_id_banco_contactobancos');
            $table->unsignedBigInteger('id_bancosucursal');
            $table->foreign('id_bancosucursal','FK_id_bancosucrusal_contactobancos')
            ->references('id')->on('contactoradicaciones'); 
            $table->index('id_bancosucursal','IDX_id_bancosucursal_contactobancos');
            $table->string('moneda',10);
            $table->string('identificaciondecuenta',45);
            $table->boolean('sn_activo')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contactobancos');
    }
};
