<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Entrada;
use App\Models\Like;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; // <-- IMPORTANTE Para identificar al usuario del Like!

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

public function prewipe(Request $request, $categoria) {
        
        $usuario_id = $request->user()->id;

        // Nos traemos todas las entradas normales
        $entradas = Entrada::where('categoria', $categoria)
            ->inRandomOrder() 
            ->get();

        // Nos traemos TODOS los IDs de las entradas a las que ESTE usuario ha dado like.
        // pluck() nos devuelve un array simple, ej: [1, 5, 12, 14]
        $likesDelUsuario = Like::where('usuario_id', $usuario_id)
                               ->pluck('entrada_id')
                               ->toArray();

        //Mapeamos las entradas para añadir nuestro dato manualmente
        $datosFormateados = $entradas->map(function ($entrada) use ($likesDelUsuario) {
            
            // Convertimos la entrada a un array puro para que Laravel no nos oculte nada
            $arrayEntrada = $entrada->toArray();
            
            // Si el ID de esta entrada está dentro de la lista de likes del usuario, es true
            $arrayEntrada['ya_le_di_like'] = in_array($entrada->id, $likesDelUsuario);
            
            return $arrayEntrada;
        });

        // Devolvemos nuestro array fabricado a mano
        return response()->json($datosFormateados);
    }


    public function filtrado(Request $request, $categoria) {
        
        $usuario_id = $request->user()->id;

        //Usamos La misma lógica para traer los datos; solo los que nos hacen falta para la fase 2; ojo el "has"
        //solo es un filtro, no traemos los likes realmente.
        $entradas = Entrada::where('categoria', $categoria)
            ->has('likes') //Importante para las entradas que no tengan ningun like; si vemos que hay muchas entradas empezamos a subir este número.
            //Quizás sería bueno pensar en traer un número máximo de entradas... eso tendría un impacto directo en la idea de contenido "democrático" pero para el MPV nos servirá así.
            ->inRandomOrder() //volvemos a traerlos de forma desordenada
            ->get();

        // Extraemos los IDs de las entradas a las que ESTE usuario ha dado like
        $likesDelUsuario = Like::where('usuario_id', $usuario_id)
                               ->pluck('entrada_id')
                               ->toArray();

        // Mapeamos para inyectar la propiedad booleana manualmente
        $datosFormateados = $entradas->map(function ($entrada) use ($likesDelUsuario) {
            $arrayEntrada = $entrada->toArray();
            $arrayEntrada['ya_le_di_like'] = in_array($entrada->id, $likesDelUsuario);
            return $arrayEntrada;
        });

        return response()->json($datosFormateados);
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

        //EL CANDADO CUANDO NO SEA LA HORA!
        // Calculamos la hora exacta en Madrid para que se ajuste a la hora de las fases y no se bloquee la subida de contenido!!!
        $horaActual = now()->setTimezone('Europe/Madrid')->format('H:i');

        // Comprobamos si estamos en Fase 2 o Fase 3 (de 18:00 a 01:59)
        // Si es así, cortamos la ejecución inmediatamente con un error 403
        if ($horaActual >= '18:00' || $horaActual < '02:00') {
            return response()->json([
                'mensaje' => 'Las publicaciones están cerradas. Es hora de votar y ver resultados.'
            ], 403);
        }

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

    //Aquí gestionamos los likes!!

public function toggleLike(Request $request, $id)
    {
        $usuario_id = $request->user()->id; 

        $likeExistente = Like::where('usuario_id', $usuario_id)
                             ->where('entrada_id', $id)
                             ->first();

        // Al tener columna 'id', Laravel ya sabe borrar esto automáticamente
        if ($likeExistente) {
            $likeExistente->delete();
            return response()->json(['mensaje' => 'Like eliminado']);
        } 
        
        Like::insert([
            'usuario_id' => $usuario_id,
            'entrada_id' => $id,
            'creado_en' => now() 
        ]);
        
        return response()->json(['mensaje' => 'Like guardado']);
    }
}


