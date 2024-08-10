<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});
Route::get('/test-csrf', function () {
    return response()->json(['message' => 'CSRF cookie received']);
});
require __DIR__.'/auth.php';
