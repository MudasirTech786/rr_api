<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Mail\ConfirmationMail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password'
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json($response, 500);
        }

        $user = User::where('email', $request->email)->first();
        if ($user) {
            $response = [
                'success' => false,
                'message' => 'Email is already taken.'
            ];
            return response()->json($response, 500);
        } else {
            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $input['confirmation_token'] = Str::random(32);
            $user = User::create($input);
            Mail::to($user->email)->send(new ConfirmationMail($user));

            $success['token'] = $user->createToken('MyApp')->plainTextToken;
            $success['name'] = $user->name;

            $response = [
                'success' => true,
                'data' => $success,
                'message' => 'Please open your Email to confirm your signup..'
            ];

            return response()->json($response, 200);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json($response, 500);
        }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = User::where('email', $request->email)->first();
            $success['token'] = $user->createToken('MyApp')->plainTextToken;
            $success['name'] = $user->name;

            $response = [
                'success' => true,
                'data' => $success,
                'message' => 'User has been logged in Successfully'
            ];

            return response()->json($response, 200);
        } else {
            $response = [
                'success' => false,
                'message' => 'Unauthorized'
            ];
            return response()->json($response);
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();
        $response = [
            'success' => true,
            'message' => 'User has been logged out successfully'
        ];
        return response()->json($response);
    }
}
