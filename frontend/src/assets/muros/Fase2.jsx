import './fase2.css';
import React, { useState, useEffect, useContext } from 'react'; // Añadido useContext
import { CategoriaContext } from '@/assets/utils/CategoriasProvisor';
import PreWipeCard from '@/assets/components/PreWipeCard';
import PreWipeCardPubli from '@/assets/components/PreWipeCardPubli';

function Fase2() { // Quitamos CategoriaContext de los paréntesis

    // Sintonizamos la categoría correcta
    const { categoriaElegida } = useContext(CategoriaContext);

    // Preparamos los estados de la "memoria"
    const [entradas, setEntradas] = useState([]); 
    const [cargando, setCargando] = useState(true); 
    const [error, setError] = useState(null);

    // Usamos useEffect para que la app se lance automáticamente
    useEffect(() => {
        const pedirEntradas = async () => {
            try {
                setCargando(true);
                
                // Rescatamos el token de Sanctum que guardamos en el Login
                const token = localStorage.getItem('token');

                // Usamos categoriaElegida en la petición al backend
                const respuesta = await fetch(`http://127.0.0.1:8000/api/entradas/${categoriaElegida}/filtrado`, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}` 
                    }
                });

                if (respuesta.ok) {
                    const datos = await respuesta.json();
                    setEntradas(datos);
                } else {
                    setError('No se pudieron cargar las entradas de esta categoría.');
                }
            } catch (err) {
                setError('Error de conexión con el servidor.');
            } finally {
                setCargando(false); 
            }
        };

        pedirEntradas();

    // Actualizamos el array de dependencias para que vigile la variable correcta
    }, [categoriaElegida]);

    const tarjetasRenderizadas = entradas.map((entrada, index) => {
        if (index >= 3 && (index - 3) % 20 === 0) { // Esto coloca un mensaje de publicidad cada 20 mensajes desde el 4
            return (
                <React.Fragment key={`grupo-${entrada.id}`}>

                    <PreWipeCardPubli
                        name="Coca-Cola" 
                        content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" 
                        marca="cocacola" 
                        url="https://www.coca-cola.com/es/es"
                    />

                    <PreWipeCard 
                        key={entrada.id} 
                        id={entrada.id} 
                        content={entrada.contenido}
                        yaLeDiLike={entrada.ya_le_di_like}
                    />

                </React.Fragment>
            );
        }
        // si no toca, se entrega la entrada.
        return (
            <PreWipeCard 
                key={entrada.id} 
                id={entrada.id} 
                content={entrada.contenido} 
                yaLeDiLike={entrada.ya_le_di_like} 
            />
        );
    });
    
    return (
        <React.Fragment>
            {cargando && <div className="cargando-logo"></div>}

            {!cargando && error && (
                <p className="mensaje-error">{error}</p>
            )}

            {!cargando && !error && entradas.length > 0 && (
                <>
                    {/* Imprimimos la lista de entradas (que ya lleva la publi camuflada en medio) */}
                    {tarjetasRenderizadas}
                </>
            )}

            {!cargando && !error && entradas.length === 0 && (
                <p className="mensaje">
                    Aún no hay publicaciones en {categoriaElegida}. ¡Anímate a publicar!
                </p>
            )}    
        </React.Fragment>
    );
}

export default Fase2;