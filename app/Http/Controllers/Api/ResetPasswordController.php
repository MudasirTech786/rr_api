<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{
    
public function reset(Request $request)
{
    $request->validate([
        'token' => 'required',
        'email' => 'required|email',
        'password' => 'required|confirmed|min:8',
    ]);

    $response = Password::reset($request->only('email', 'password', 'password_confirmation', 'token'));

    if ($response === Password::PASSWORD_RESET) {
        return response()->json(['message' => 'Password reset successfully']);
    } else {
        return response()->json(['error' => 'Password reset failed'], 400);
    }
}
}
