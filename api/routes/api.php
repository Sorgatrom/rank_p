<?php
//Aquí iran todas las rutas que con react.

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EntradaController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Tu nueva ruta para leer las entradas desde React
Route::get('/entradas', [EntradaController::class, 'index']);
