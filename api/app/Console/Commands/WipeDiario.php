<?php
namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Models\Entrada;
use App\Models\Usuario; 

class WipeDiario extends Command
{
    //Este es el nombre del comando se ejecutara
    protected $signature = 'app:wipe-diario';
    protected $description = 'Reparte medallas, limpia entradas y devuelve tokens a todos';

    public function handle()
    {
        $categorias = [
            "Entretenimiento", "Política", "Deportes", "Tecnología", 
            "Arte", "Viajes", "Moda", "Ciencia", 
            "Música", "Economía", "Salud", "Gastronomía", 
            "Videojuegos", "Cine"
        ];

        //Los tipos de medalla coinciden con las posiciones 0, 1 y 2 del Top 3
        $tiposMedalla = ['oro', 'plata', 'bronce'];

        //REPARTIR MEDALLAS
        foreach ($categorias as $categoria) {
            
            //Buscamos a los 3 mejores
            $topEntradas = Entrada::where('categoria', $categoria)
                ->addSelect(['likes_count' => DB::table('likes')
                    ->selectRaw('count(*)')
                    ->whereColumn('entrada_id', 'entradas.id')
                ])
                ->orderByDesc('likes_count')
                ->take(3)
                ->get();

            //Repartimos la medalla a cada ganador para cada top entrada por categoria
            foreach ($topEntradas as $index => $entrada) {
                //Buscamos al usuario dueño de la entrada (cambia 'usuario_id' si tu columna se llama distinto)
                $usuario = DB::table('usuarios')->where('id', $entrada->usuario_id)->first();

                if ($usuario) {
                    //Decodificamos  medallas actuales. Si es null, creamos un array vacío.
                    $medallas = json_decode($usuario->medallas, true) ?? [];

                    //Generamos un ID único aleatorio
                    $nuevoId = uniqid(); 

                    //Añadimos
                    $medallas[] = [
                        'id' => $nuevoId,
                        'tipo' => $tiposMedalla[$index], 
                        'categoria' => $categoria
                    ];

                    //Actualizamos la base de datos convirtiendo de vuelta a JSON
                    DB::table('usuarios')->where('id', $usuario->id)->update([
                        'medallas' => json_encode($medallas)
                    ]);
                }
            }
        }

        //LIMPIAR LA BASE DE DATOS (Wipe)
        //Borramos primero los likes para que PostgreSQL no dé error de claves foráneas
        DB::table('likes')->delete();
        //Borramos todas las entradas
        DB::table('entradas')->delete();

        //REINICIAR TOKENS
        //Actualizamos la columna tokens de TODOS los usuarios a 1 de golpe
        DB::table('usuarios')->update(['tokens' => 1]);

        //Mensaje verde en la consola para confirmar que ha funcionado
        $this->info('¡Wipe diario ejecutado con éxito!');
    }
}
