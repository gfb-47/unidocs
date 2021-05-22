<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcessKnowledgeAreas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('process_knowledge_areas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreign('process_id')->references('id')->on('processes')->onDelete('cascade');
            $table->bigInteger('process_id')->unsigned()->nullable();
            $table->foreign('knowledge_area_id')->references('id')->on('knowledge_areas')->onDelete('cascade');
            $table->bigInteger('knowledge_area_id')->unsigned()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('process_knowledge_areas');
    }
}
