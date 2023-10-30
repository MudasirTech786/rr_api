<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGreenBrilliancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('green_brilliances', function (Blueprint $table) {
            $table->id();
            $table->string('zip')->nullable();
            $table->boolean('is_home_owner')->nullable();
            $table->string('type_of_home')->nullable();
            $table->string('average_monthly_bill')->nullable();
            $table->string('electricity_provider')->nullable();
            $table->string('shade')->nullable();
            $table->string('solar_considering')->nullable();
            $table->string('credit_score')->nullable();
            $table->string('address')->nullable();
            $table->string('email')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('phone')->nullable();
            $table->string('source')->nullable();
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
        Schema::dropIfExists('green_brilliances');
    }
}
