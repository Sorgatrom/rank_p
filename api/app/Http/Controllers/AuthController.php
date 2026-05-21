<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//Importamos las herramientas y los modelos.

use App\Models\Usuario;
use Illuminate\Support\Facades\Hash; // Herramienta para comprobar contraseñas

class AuthController extends Controller
{
    //Validamos que react nos envió los datos correctos
    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);


        //Buscar en la base de datos si existe un usuario con ese email
        $usuario = Usuario::where('email', $request->email)->first();


        //Si el usuario no existe, o la contraseña no coincide, rechazamos
        if (!$usuario || !Hash::check($request->password, $usuario->password)) {
            return response()->json([
                'mensaje' => 'Las credenciales son incorrectas'
            ], 401); // 401 "No Autorizado"
        }

        //Si todo es correcto, generamos el Token digital
        $token = $usuario->createToken('token_de_acceso')->plainTextToken;

        //Devolvemos el token y los datos del usuario a React
        return response()->json([
            'mensaje' => 'Login exitoso',
            'token' => $token,
            'usuario' => $usuario
        ]);

        //AHORA GENERAMOS UNA RUTA EN ROUTES 
    }


}
