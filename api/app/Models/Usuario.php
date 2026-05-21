<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens; // <-- Importamos la herramienta que genera tokens para la validación de usuarios

class Usuario extends Model
{

    use HasApiTokens; //Esto es para que genere tokens para la validación de usuarios!!!
    
    //Definimos la tabla por si acaso (aunque laravel por defecto lo detecta)
    protected $table = 'usuarios';

    //Desactivamos la búsqueda automática de created_at y update_at
    public $timestamps = false;

    //Definimos qué campos se pueden rellenar de forma masiva (seguridad)
    protected $fillable = [
        'username', 'email', 'password', 'bio', 'socialmed', 'medallas', 'tokens'
    ];

    //Ocultamos la contraseña para que nunca viaje al front en JSON descubiertas
    protected $hidden = [
        'password'
    ];
}
