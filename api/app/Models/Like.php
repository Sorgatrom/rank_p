<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    ///indicamos el nombre exacto de la tabla
    protected $table = 'likes';

    //Apagamos el autoincremento porque no tienes una columna 'id' única
    public $incrementing = false;

    //Apagamos los timestamps automáticos para que no busque 'updated_at' ni 'created_at'
    public $timestamps = false;

    //Las columnas que permitiremos rellenar
    protected $fillable = [
        'usuario_id',
        'entrada_id',
        'creado_en'
    ];
}