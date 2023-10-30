<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProposalsTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals_tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger('proposal_id')->unsigned();
            $table->unsignedBiginteger('task_id')->unsigned();

            $table->foreign('proposal_id')->references('id')
                 ->on('proposals')->onDelete('cascade');
            $table->foreign('task_id')->references('id')
                ->on('tasks')->onDelete('cascade');
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
        Schema::dropIfExists('proposals_tasks');
    }
}
