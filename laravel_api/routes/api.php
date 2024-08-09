<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\HubController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\PriorityController;

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('users', UserController::class)->except(['login']);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('hubs', HubController::class);
    Route::apiResource('projects', ProjectController::class);
    Route::apiResource('tasks', TaskController::class);
    Route::apiResource('statuses', StatusController::class);
    Route::apiResource('priorities', PriorityController::class);
  });