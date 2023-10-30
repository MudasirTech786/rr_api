<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ForgotPasswordController;
use App\Http\Controllers\Api\ResetPasswordController;
use App\Http\Controllers\ConfirmationController;
use App\Http\Controllers\API\ProductController;

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
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/confirm/{token}', [ConfirmationController::class, 'confirm'])->name('confirmation');
Route::get('/forget/{token}', [ConfirmationController::class, 'confirm'])->name('forget');


Route::post('password/reset', [ForgotPasswordController::class, 'sendResetLink'])->name('password.reset');
Route::post('password/reset/confirm',[ResetPasswordController::class, 'reset']);




Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::resource('products', ProductController::class);
});



