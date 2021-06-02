<?php

Auth::routes();
Route::get('/', function () {
    return view('welcome');
});

Route::middleware('auth')->resource('board', 'BoardController');

