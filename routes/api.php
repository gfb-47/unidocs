<?php

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
Route::group(['prefix' => 'v1', 'namespace' => 'API'], function () {

    Route::group(['prefix' => 'auth'], function () {
        Route::post('/signin', 'AuthController@signin');
    });
    
    Route::apiResource('posts', 'PostController');
    Route::get('student', 'StudentController@index');
    Route::get('professor', 'ProfessorController@index');
    Route::get('course', 'CourseController@index');
    Route::get('subject', 'SubjectController@index');
    Route::get('semester', 'SemesterController@index');
    
    //Use Este Padrão para caso seja CRUD's
    Route::apiResource('knowledgearea', 'KnowledgeAreaController');
    Route::apiResource('process', 'ProcessController');
    
    Route::group(['prefix' => 'process'], function () {
        Route::put('changestatus/{id}/semester_professor', 'StatusController@toSemesterProfessor');
        Route::put('changestatus/{id}/advise_professor', 'StatusController@toAdviseProfessor');
        Route::put('changestatus/{id}/development', 'StatusController@toDevelopment');
        Route::put('changestatus/{id}/approved', 'StatusController@approved');
        Route::put('changestatus/{id}/rejected', 'StatusController@rejected');
    });
});