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
        Schema::create('contactoradicaciones', function (Blueprint $table) {
            $table->id();
            $table->integer('id_contacto')->index('IDX_id_contacto_contactoradicaciones');
            $table->decimal('latitud',9,6);
            $table->decimal('longitud',9,6);
            $table->string('descripcion',45);
            $table->integer('id_provincia')->nullable()->index('IDX_id_provincia_contactoradicaciones');
            $table->integer('id_subregion')->nullable()->index('IDX_id_subregion_contactoradicaciones');
            $table->string('direccion_calle',255)->nullable();
            $table->integer('id_departamento_ciudad')->nullable()->index('IDX_id_departamento_ciudad_contactoradicaciones');
            $table->integer('id_localidad')->nullable()->index('IDX_id_localidad_contactoradicaciones');
            $table->string('localidad',255)->nullable();
            $table->string('codigo_postal',20)->nullable();
            $table->boolean('sn_predeterminado')->default(0);
            $table->boolean('sn_correspondencia')->default(0);
            $table->boolean('sn_activo')->default(1);
            $table->string('domicilioformateado',255)->nullable();
            $table->foreignId('id_contacto')->constrained('contactos', 'id')->onDelete('cascade')->name('FK_id_contacto_contactoradicaciones'); 
            $table->foreignId('id_departamento_ciudad')->constrained('geolugares', 'id')->onDelete('cascade')->name('FK_id_departamento_contactoradicaciones'); 
            $table->foreignId('id_localidad')->constrained('geolugares', 'id')->onDelete('cascade')->name('FK_id_localidad_contactoradicaciones'); 
            $table->foreignId('id_provincia')->constrained('geoprovinciasregiones', 'id')->onDelete('cascade')->name('FK_id_provincia_contactoradicaciones'); 
            $table->foreignId('id_subregion')->constrained('geoprovinciasregiones', 'id')->onDelete('cascade')->name('FK_id_subregion_contactoradicaciones'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contactoradicaciones');
    }
};
