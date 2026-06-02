<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function actualizarPerfil(Request $request) {
        $usuario = $request->user();

        // Cambiado a 'bio'
        if ($request->has('bio')) {
            $usuario->bio = $request->bio;
        }

        // Cambiado a 'socialmed'
        if ($request->has('socialmed')) { 
            $usuario->socialmed = $request->socialmed;
        }

        $usuario->save();

        return response()->json([
            'mensaje' => 'Perfil actualizado correctamente',
            'usuario' => $usuario
        ]);
    }
}