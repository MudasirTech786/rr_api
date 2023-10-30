<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use App\Mail\forgetMail;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{

    public function sendResetLink(Request $request)
    {
        $this->validate($request, ['email' => 'required|email']);
        $user = User::where('email', $request->email)->first();
        if ($user) {
            // $response = Password::sendResetLink($request->only('email'));

            if (Mail::to($user->email)->send(new forgetMail($user))) {
                return response()->json(['message' => 'Password reset email sent']);
            } else {
                return response()->json(['error' => 'Password reset email not sent'], 400);
            }
        } else {
            $response = [
                'success' => false,
                'message' => 'This Email is not registered yet.'
            ];
            return response()->json($response, 500);
        }
    }
}
