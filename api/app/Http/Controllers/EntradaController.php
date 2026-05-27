<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Entrada;
use Illuminate\Http\Request;

class EntradaController extends Controller
{
    public function index()
        {
            // Traemos todas las entradas y las convertimos automáticamente a JSON
            return Entrada::all();
        }

    public function store(Request $request){

        //Validamos que nos llegue el contenido y la categoria
        $request->validate([
            'contenido' => 'required|string|max:262',
            'categoria' => 'required|string',
        ]);

        $usuario = $request->user();

        //Restamos el TOKEN, esto es importante hacerlo aquí porque ocurre en el back (inacesible)
        if ($usuario->tokens <= 0) {
            return response()->json(['mensaje' => 'No tienes tokens suficientes'], 403);
        }

        $usuario->tokens = $usuario->tokens - 1;
        $usuario->save();

        // Creamos la entrada vinculándola al usuario autenticado
        // Guardamos la entrada con la categoría
        //esto es posible hacerlo tan simple sin querys porque estamos explotando laravel, eso lo hace internamente. Configuramos en Modelos el Usuario para que haga esto
        $entrada = $usuario->entradas()->create([
            'contenido' => $request->contenido,
            'categoria' => $request->categoria,
        ]);

        return response()->json([
            'mensaje' => 'Entrada publicada',
            'tokens_restantes' => $usuario->tokens,
            'entrada' => $entrada
        ], 201);
    }
}


