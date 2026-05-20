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
}
