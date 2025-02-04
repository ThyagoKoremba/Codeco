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
        Schema::create('contactos', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid',36)->nullable();
          /*   $table->integer('id_fisicojuridico')->default(1)->index('IDX_id_fisicojuridico_contactos'); */
            $table->integer('id_pais')->default(1)->index('IDX_id_pais_contactos');
            $table->string('car',6)->nullable();
            $table->string('tratamiento',45)->nullable();
            $table->string('apellidorazonsocial',100);
            $table->string('nombrefantasia',100)->nullable();
            $table->string('nombresegundo',55)->nullable();
            $table->string('apellidoynombre',255);
       /*      $table->integer('id_nacionalidad')->nullable()->index('IDX_id_nacionalidad_contactos'); */
            $table->date('fechanacimiento')->nullable();
            $table->date('fechafallecimiento')->nullable();
          /*   $table->integer('id_situacioncivil')->default(1)->index('IDX_id_situacioncivil_contacto');
            $table->integer('id_personal')->default(1)->index('IDX_id_personal_contactos'); */
            $table->integer('id_personal_dato')->default(0);
          /*   $table->integer('id_condiciontributaria')->default(1)->index('IDX_id_condiciontributaria_contactos');
            $table->integer('id_identidadtributaria')->default(1)->index('IDX_id_identidadtributaria_contactos'); */
            $table->integer('id_identidadtributaria_dato')->default(1);
            $table->mediumText('observacion');
            $table->date('fecha_form_alta')->nullable();
            $table->date('fecha_form_modificacion')->nullable();
            $table->date('fecha_vigenciahasta')->nullable();
            $table->string('patronbusqueda',255)->nullable()->index('IDX_patronbusqueda_contactos');
           /*  $table->integer('id_estado')->default(1); */
            $table->boolean('sn_activo')->default(1);
            $table->foreignId('id_condiciontributaria')->constrained('condiciontributarias', 'id')->onDelete('cascade')->name('FK_id_condiciontributaria_contactos');
            $table->foreignId('id_estado')->default(1)->constrained('contactoestados', 'id')->onDelete('cascade')->name('FK_id_estado_contactos'); 
            $table->foreignId('id_fisicojuridico')->constrained('fisicosjuridicos', 'id')->onDelete('cascade')->name('FK_id_fisicojuridico_contactos'); 
            $table->foreignId('id_identidadtributaria')->constrained('identidades', 'id')->onDelete('cascade')->name('FK_id_identidadtributaria_contactos'); 
            $table->foreignId('id_nacionalidad')->constrained('geopais', 'id')->onDelete('cascade'); 
            $table->foreignId('id_personal')->constrained('identidades', 'id')->onDelete('cascade')->name('FK_id_personal_contactos'); 
            $table->foreignId('id_situacioncivil')->constrained('contactosituacionciviles', 'id')->onDelete('cascade')->name('FK_id_situacioncivil_contactos'); 
            $table->foreignId('id_user_created_at')->constrained('users', 'id')->onDelete('cascade')->name('FK_id_user_created_at_contactos')->default(1)->index('IDX_id_user_created_at_contactos'); 
            $table->foreignId('id_user_updated_at_fk')->constrained('users', 'id')->onDelete('cascade')->name('FK_id_user_updated_at_contactos')->default(1)->index('IDX_id_user_updated_at_contactos'); 

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contactos');
    }
};
