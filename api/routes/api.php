<?php
//Aquí iran todas las rutas que con react.

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EntradaController;
use App\Http\Controllers\AuthController; // <-- Importamos el nuevo controlador paara la autentificación

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//RUTA DE LOGIN
Route::post('/login', [AuthController::class, 'login']);

//Ruta de etradas para el usuario no regristado
Route::get('/publico/entradas/{categoria}', [EntradaController::class, 'prewipeInvitados']);


//Protegemos las rutas para que solo los usuarios logueados puedan acceder
Route::middleware('auth:sanctum')->group(function () { //Importantisimo.
    
    //Ruta para publicar una nueva entrada
    Route::post('/entradas', [EntradaController::class, 'store']);

    //PREWIPE
    Route::get('/entradas/{categoria}/prewipe', [EntradaController::class, 'prewipe']);

    //FILTRADO
    Route::get('/entradas/{categoria}/filtrado', [EntradaController::class, 'filtrado']);

    //RANKING
    Route::get('/entradas/{categoria}/rank', [EntradaController::class, 'obtenerRank']);

    //LIKES
    Route::post('/entradas/{id}/like', [EntradaController::class, 'toggleLike']);
    
});
