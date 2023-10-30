<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProposalsServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals_services', function (Blueprint $table) {
            $table->id();

            $table->unsignedBiginteger('proposal_id')->unsigned();
            $table->unsignedBiginteger('service_id')->unsigned();

            $table->foreign('proposal_id')->references('id')
                 ->on('proposals')->onDelete('cascade');
            $table->foreign('service_id')->references('id')
                ->on('services')->onDelete('cascade');
 
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
        Schema::dropIfExists('proposals_services');
    }
}
