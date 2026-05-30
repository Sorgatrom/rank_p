<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entrada extends Model
{
      //Definimos la tabla por si acaso (aunque laravel por defecto lo detecta)
    protected $table = 'entradas';

    //Desactivamos la búsqueda automática de created_at y update_at
    public $timestamps = false;

    //Al ponerlo en fillable (user_id), permitimos que Laravel cree entradas asociadas a un ID de usuario
    protected $fillable = [
        'usuario_id', 'contenido', 'categoria',
    ];

    //Relación que conecta al usuario con su entrada
    public function usuario() {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    // Le decimos a la entrada que puede tener muchos likes
    public function likes() {
        return $this->hasMany(Like::class, 'entrada_id');
    }

}
