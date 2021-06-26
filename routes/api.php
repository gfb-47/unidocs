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
        Route::get('/profile', 'ProfileController@show')->middleware('auth:api');
        Route::put('/profile', 'ProfileController@updatePhone')->middleware('auth:api');
        Route::put('/profile2', 'ProfileController@updatePassword')->middleware('auth:api');
    });

    Route::group(['middleware' => 'auth:api'], function () {
        Route::apiResource('posts', 'PostController');
        Route::get('student', 'StudentController@index');
        Route::put('student/{id}', 'StudentController@changeStatus');
        Route::get('professor', 'ProfessorController@index');
        Route::put('professor/{id}', 'ProfessorController@changeStatus');
        Route::get('course', 'CourseController@index');
        Route::get('subject', 'SubjectController@index');
        Route::get('semester', 'SemesterController@index');

        // Essas Rotas dizem respeito a tela inicial
        Route::get('student/process/main', 'IndexController@mainStudentProcess');
        Route::get('professor/process/main', 'IndexController@mainAdviseProfessorProcess');
        Route::get('main/process', 'IndexController@mainAdminProcess');

        //Use Este Padrão para caso seja CRUD's
        Route::apiResource('knowledgearea', 'KnowledgeAreaController');
        Route::apiResource('process', 'ProcessController');
        Route::get('process2', 'ProcessController@indexProcessSemesters');
        Route::apiResource('jury', 'JuryController')->except(['create', 'edit']);

        Route::group(['prefix' => 'process'], function () {
            Route::put('changestatus/{id}/semesterprofessor', 'StatusController@toSemesterProfessor');
            Route::put('changestatus/{id}/acceptorientation', 'StatusController@acceptOrientation');
            Route::put('changestatus/{id}/rejectorientation', 'StatusController@rejectOrientation');
            Route::put('changestatus/{id}/todefense', 'StatusController@toDefense');
            Route::put('changestatus/{id}/ratingprocess', 'StatusController@ratingProcess');
            Route::put('changestatus/{id}/finalizeprocess', 'StatusController@finalizeProcess');
            Route::get('terms/{process_id}', 'TermController@index');
            Route::post('terms/{id}/reset', 'TermController@reset');
            Route::delete('terms/{id}/destroy', 'TermController@destroy');
            Route::post('documentsign/document', 'TermController@signDocument');
            Route::post('documentsend/file', 'TermController@sendDocument');
        });
        
    });
    Route::group(['prefix' => 'public'], function () {
        Route::get('search/professor', 'PublicController@searchProfessors');
        Route::get('/getusername', 'PublicController@getUsername');
    });
});