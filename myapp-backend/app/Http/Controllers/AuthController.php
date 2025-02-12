<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'activation_code' => Str::random(6), // Session-based activation
        ]);

        return response()->json(['message' => 'User registered', 'activation_code' => $user->activation_code], 201);
    }

    public function activate(Request $request)
    {
        $user = User::where('email', $request->email)->where('activation_code', $request->code)->first();
        if (!$user) return response()->json(['message' => 'Invalid code'], 400);

        $user->activation_code = null;
        $user->save();

        return response()->json(['message' => 'Account activated'], 200);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['access_token' => $token, 'token_type' => 'Bearer']);
    }
}
