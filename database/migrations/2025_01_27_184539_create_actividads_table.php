<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actividades', function (Blueprint $table) {
            $table->id();
            $table->string('actividadnombre');
            $table->string('actividadabreviatura');
            $table->boolean('isdefaultvalue')->default(0);
            $table->boolean('activosn')->default(0);
            $table->boolean('titulosn')->default(0);
            $table->boolean('informacionsn')->default(0);
            $table->boolean('etiquetasn')->default(0);
            $table->text('actividaddsc');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actividades');
    }
};
