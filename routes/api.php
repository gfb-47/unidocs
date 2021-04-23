<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::resource('posts', 'PostController');
Route::get('student','API\StudentController@index');
Route::get('professor','API\ProfessorController@index');
Route::get('course','API\CourseController@index');
Route::get('subject','API\SubjectController@index');
Route::get('semester','API\SemesterController@index');

Route::group(['prefix' => 'knowledgearea'], function () {
    Route::get('read', 'API\KnowledgeAreaController@index');
    Route::post('create', 'API\KnowledgeAreaController@store');
    Route::put('update/{id}', 'API\KnowledgeAreaController@update');
    Route::delete('delete/{id}', 'API\KnowledgeAreaController@destroy');
});