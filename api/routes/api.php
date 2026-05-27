<?php
//Aquí iran todas las rutas que con react.

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EntradaController;
use App\Http\Controllers\AuthController; // <-- Importamos el nuevo controlador paara la autentificación

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Tu nueva ruta para leer las entradas desde React
Route::get('/entradas', [EntradaController::class, 'index']);

// NUESTRA NUEVA RUTA DE LOGIN
Route::post('/login', [AuthController::class, 'login']);

// RUTA DE ENTRADAS!
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/entradas', [EntradaController::class, 'store']);
});
