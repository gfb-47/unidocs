<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// Acessar de maneira manual o Index.
Route::get('/', function () {
    return view('index');
});

Auth::routes(['register' => false]);

Route::get('/logout', function () {
    Auth::logout();
    return redirect('/');
})->middleware('auth');

Route::get('/unidocs/{any?}', 'HomeController@index')->where('any', '^(?!api).*$')->middleware('auth')->name('home');

Route::get('/report/minute/{id}', 'WEB\MinutePresentationReportController')->middleware('auth');