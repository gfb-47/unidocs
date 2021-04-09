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
// Route::get('/', function () {
//     return view('index');
// });

Route::get('/{any?}', function () {
    return view('welcome');
})->where('any','^(?!api).*$');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
