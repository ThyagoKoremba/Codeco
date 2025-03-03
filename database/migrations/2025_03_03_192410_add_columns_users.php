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
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('primer_login')->nullable()->default(true);
            $table->boolean('super_admin')->nullable()->default(false);
            $table->boolean('activo')->nullable()->default(true);
            $table->unique('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['primer_login','super_login','activo']);
            $table->dropUnique(['name']);
        });
    }
};
