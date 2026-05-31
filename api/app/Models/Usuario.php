<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // <-- Importamos la herramienta que genera tokens para la validación de usuarios

class Usuario extends Authenticatable{

    use HasApiTokens, Notifiable; //Esto es para que genere tokens para la validación de usuarios!!!
    
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

    // Le decimos a Laravel que la columna 'medallas' contiene un Array (JSON)
    protected $casts = [
        'medallas' => 'array'
    ];

    //relación "uno a muchos" que permite acceder fácilmente a todas las publicaciones asociadas a un usuario mediante un simple atajo.
    //a esto nos referimos en las EntradasController
    public function entradas() {
        return $this->hasMany(Entrada::class, 'usuario_id');
    }
}
