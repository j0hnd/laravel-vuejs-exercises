<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('skills', function () {
    return ['Laravel', 'Vue', 'PHP', 'Javscript', 'Tooling'];
});

Route::get('/projects/create', 'ProjectController@create');
Route::get('/projects/get', 'ProjectController@get');
Route::post('/projects', 'ProjectController@store');
