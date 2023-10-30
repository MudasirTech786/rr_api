<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class ConfirmationController extends Controller
{
    public function confirm($token) {
        $user = User::where('confirmation_token', $token)->first();
    
        if (!$user) {
            // Token is invalid
            return view('confirmation.invalid');
        }
    
        $user->update(['email_confirmed' => 1, 'confirmation_token' => null]);
    
        // return view('confirmation.success');
    }
    
    public function forget($token) {
        $user = User::where('confirmation_token', $token)->first();
    
        if (!$user) {
            // Token is invalid
            return view('confirmation.invalid');
        }
    
        $user->update(['email_confirmed' => 1, 'confirmation_token' => null]);
    
        // return view('confirmation.success');
    }
}
