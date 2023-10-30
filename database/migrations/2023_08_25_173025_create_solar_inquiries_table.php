<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSolarInquiriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solar_inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('zip')->nullable();
            $table->boolean('is_home_owner')->nullable();
            $table->string('address')->nullable();
            $table->string('email')->nullable();
            $table->string('full_name')->nullable();
            $table->string('phone')->nullable();
            $table->text('message')->nullable();

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
        Schema::dropIfExists('solar_inquiries');
    }
}
