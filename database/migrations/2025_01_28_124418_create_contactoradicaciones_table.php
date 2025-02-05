<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function PHPUnit\Framework\once;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contactoradicaciones', function (Blueprint $table) {
            $table->id();
            $table->index('id_contacto','IDX_id_contacto_contactoradicaciones');
            $table->foreign('id_contacto','FK_id_contacto_contactoradicaciones')->references('id')->on('contactos')->onDelete('cascade'); 
            $table->decimal('latitud',9,6)->nullable()->default(null);
            $table->decimal('longitud',9,6)->nullable()->default(null);
            $table->decimal('altitud',7,2)->nullable()->default(null);
            $table->string('descripcion',45)->nullable()->default(null);
            $table->index('id_pais','IDX_id_pais_contactoradicaciones');
            $table->foreign('id_pais','FK_id_pais_contactoradicaciones')->references('id')->on('geopais')->onDelete('cascade')->default(1);
            $table->index('id_provincia','IDX_id_provincia_contactoradicaciones'); 
            $table->foreign('id_provincia','FK_id_provincia_contactoradicaciones')->references('id')->on('geoprovinciasregiones')->onDelete('cascade')->nullable();
            $table->index('id_subregion','IDX_id_subregion_contactoradicaciones');
            $table->foreign('id_subregion','FK_id_subregion_contactoradicaciones')->references('id')->on('geoprovinciasregiones')->onDelete('cascade')->nullable(); 
            $table->string('direccion_calle',255)->nullable()->default(null);
            $table->string('localidad',255)->nullable();
            $table->index('id_departamento_ciudad','IDX_id_departamento_ciudad_contactoradicaciones');
            $table->foreign('id_departamento_ciudad','FK_id_departamento_contactoradicaciones')->references('id')->on('geolugares')->onDelete('cascade')->nullable()->default(1);
            $table->string('departamento_ciudad',255)->nullable()->default(null); 
            $table->index('id_localidad','IDX_id_localidad_contactoradicaciones');
            $table->foreign('id_localidad','FK_id_localidad_contactoradicaciones')->references('id')->on('geolugares')->onDelete('cascade')->nullable()->default(1);
            $table->string('codigo_postal',20)->nullable()->default(null);
            $table->string('mail_tipo',45)->default(null)->nullable();
            $table->string('mail_direccion',100)->default(null)->nullable();
            $table->string('telefono_tipo',45)->default(null)->nullable();
            $table->string('telefono_numero',45)->default(null)->nullable();
            $table->boolean('telefono_sn_movil')->default(0);
            $table->string('telefono1_tipo',45)->default(null)->nullable();
            $table->string('telefono1_numero',45)->default(null)->nullable();
            $table->boolean('telefono1_sn_movil')->default(0);
            $table->string('domicilioformateado',255)->default(null)->nullable();
            $table->mediumText('nota');
            $table->boolean('sn_predeterminado')->default(0);
            $table->boolean('sn_correspondencia')->default(0);
            $table->boolean('sn_activo')->default(1);
            $table->bigInteger('id_user_created_at')->default(1);
            $table->bigInteger('id_user_updated_at')->default(1);




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
