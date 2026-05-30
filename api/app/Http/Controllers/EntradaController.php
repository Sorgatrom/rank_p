<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Entrada;
use Illuminate\Http\Request;

class EntradaController extends Controller
{
    public function prewipeInvitados($categoria){ //Este es para los usuarios no registrados que vean algo de contenido, un max de 20 post.
        // Buscamos por categoría, las mezclamos para que sea dinámico y limitamos a 20
        $entradas = Entrada::where('categoria', $categoria)
            ->inRandomOrder() // Muestra una muestra variada cada vez que entran
            ->take(15)        // Límite estricto de 15 entradas, que tenga que hacer un scroll y se quede con ganas de mas jaja
            ->get();

        return response()->json($entradas);
    }

    public function prewipe($categoria) {
        // Solo traemos la entrada. El 'usuario_id' ya viene incluido por defecto en la tabla.
        // Esto es importante ya que para mantener el anonimato del usuario no podemos entregar en JSON un nombre de usuario relacionado con una entrada
        // a través de la consola se podría ver estos datos "crudos", para esto solo traemos su User_id.
        $entradas = Entrada::where('categoria', $categoria)
            ->inRandomOrder() //Importantísimo para que las envie desordenada desde el back
            ->get();

        return response()->json($entradas);
    }

    public function filtrado($categoria) {
        //Usamos La misma lógica para traer los datos; solo los que nos hacen falta para la fase 2; ojo el "has"
        //solo es un filtro, no traemos los likes realmente.
        $entradas = Entrada::where('categoria', $categoria)
            ->has('likes') //Importante para las entradas que no tengan ningun like; si vemos que hay muchas entradas empezamos a subir este número.
            //Quizás sería bueno pensar en traer un número máximo de entradas... eso tendría un impacto directo en la idea de contenido "democrático" pero para el MPV nos servirá así.
            ->inRandomOrder() //volvemos a traerlos de forma desordenada
            ->get();

        return response()->json($entradas);
    }

    public function obtenerRank($categoria) {
        //Buscamos por categoría
        $entradas = Entrada::where('categoria', $categoria)
            //Cargamos al autor, pero SOLO el id y el nombre por seguridad (como acordamos antes)
            ->with('usuario:id,name') 
            //Se Crea una columna virtual llamada 'likes_count' con el total de corazones
            ->withCount('likes') 
            //Ordenamos usando esa columna virtual de mayor a menor
            ->orderBy('likes_count', 'desc') 
            //En caso de empate de likes, ordenamos por fecha (premio al madrugador)
            ->orderBy('created_at', 'desc') 
            //Ponemos el límite de 50
            ->take(50) //Para no hacer una lista infinita
            ->get();

        return response()->json($entradas);
    }

    public function store(Request $request) {

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


