import './fase1.css';
import React, { useState, useEffect, useContext } from 'react'; // 1. Añadimos useContext aquí
import { CategoriaContext } from '../utils/CategoriasProvisor';
import PreWipeCard from '../components/PrewipeCard';
import PreWipeCardPubli from '../components/PrewipeCardPubli';

function Fase1() { // 2. Dejamos los paréntesis vacíos

    // 3. Sintonizamos la categoría desde tu Contexto (igual que en invitados)
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

                // 4. Usamos categoriaElegida en la URL
                const respuesta = await fetch(`http://127.0.0.1:8000/api/entradas/${categoriaElegida}/prewipe`, {
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

    // 5. Le decimos a React que vigile los cambios de categoriaElegida
    }, [categoriaElegida]);

    const tarjetasRenderizadas = entradas.map((entrada, index) => {
        if (index >= 3 && (index - 3) % 20 === 0) { // Coloca publicidad cada 20 mensajes desde el 4
            return (
                <React.Fragment key={`grupo-${entrada.id}`}>

                    <PreWipeCardPubli
                        name="Coca-Cola" 
                        content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" 
                        marca="cocacola" 
                        url="https://www.coca-cola.com/es/es"
                    />

                    <PreWipeCard content={entrada.contenido}/>

                </React.Fragment>
            );
        }
        // si no toca, se entrega la entrada.
        return <PreWipeCard key={entrada.id} id={entrada.id} content={entrada.contenido} />;
    });
    
    return (
        <React.Fragment>
            {cargando && <div className="cargando-logo"></div>}

            {!cargando && error && (
                <p className="mensaje-error">{error}</p>
            )}

            {!cargando && !error && entradas.length > 0 && (
                <>
                    {/* Imprimimos la lista de entradas con la publi camuflada */}
                    {tarjetasRenderizadas}
                </>
            )}

            {!cargando && !error && entradas.length === 0 && (
                <p className="mensaje">
                    {/* 6. Usamos categoriaElegida para el mensaje final */}
                    Aún no hay publicaciones en {categoriaElegida}. ¡Anímate a publicar!
                </p>
            )}    
        </React.Fragment>
    );
}

export default Fase1;