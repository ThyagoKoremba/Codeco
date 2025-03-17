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
        Schema::create('xxx', function(Blueprint $table){
            $table->id();
            $table->string('roldescripcion',45);
            $table->string('rolabreviatura',15);
            $table->boolean('isdefaultvalue')->default(0);
            $table->boolean('activosn')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('xxx');
    }
};
