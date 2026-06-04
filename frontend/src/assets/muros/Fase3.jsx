import './fase3.css'
import React, { useState, useEffect, useContext } from 'react';
import { CategoriaContext } from '@/assets/utils/CategoriasProvisor'
import RankCard from '@/assets/components/RankCard';
import PreWipeCardPubli from '@/assets/components/PrewipeCardPubli';


function Fase3() {
    //Llamamos a la categoria (la radiooo)
    const { categoriaElegida } = useContext(CategoriaContext);

    //estados
    const [entradas, setEntradas] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    //Vamos con la petición
    useEffect(() => {
        const pedirRanking = async () => {
            try {
                setCargando(true);
                const token = localStorage.getItem('token');
                
                const respuesta = await fetch(`http://127.0.0.1:8000/api/entradas/${categoriaElegida}/rank`, {
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
                    setError('No se pudo cargar el ranking.');
                }
            } catch (err) {
                setError('Error de conexión con el servidor.');
            } finally {
                setCargando(false);
            }
        };

        pedirRanking();
    }, [categoriaElegida]); //Reejecuta si el usuario cambia de categoría

    //Mapeamos las entradas para crear las tarjetas
    const rankingRenderizado = entradas.map((entrada, index) => {
        
        //cada 20 mensajes a partir del 4º
        if (index >= 3 && (index - 3) % 20 === 0) { 
            return (
                <React.Fragment key={`grupo-${entrada.id}`}>
                    
                    <PreWipeCardPubli
                        name="Coca-Cola" 
                        content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" 
                        marca="cocacola" 
                        url="https://www.coca-cola.com/es/es"
                    />
                    
                    <RankCard 
                        key={entrada.id}
                        pos={index + 1} //El index empieza en 0 sumamos 1 para los puestos
                        user={entrada.usuario.username}
                        medallas={entrada.usuario.medallas}
                        content={entrada.contenido}
                        sumlikes={entrada.likes_count}
                    />

                </React.Fragment>
            );
        }
        
        console.log("Entrada:", entrada);
        // Si no toca publicidad, mostramos la tarjeta normal
        return (
            <RankCard 
                key={entrada.id}
                pos={index + 1}
                user={entrada.usuario.username}
                medallas={entrada.usuario.medallas}
                content={entrada.contenido}
                sumlikes={entrada.likes_count}
            />
        );
    });

    return (
        <React.Fragment>
            {cargando && <div className="cargando-logo"></div>}

            {!cargando && error && <p className="mensaje-error">{error}</p>}

            {!cargando && !error && entradas.length > 0 && (
                <>
                    <div className="cajon-ppal">
                    {rankingRenderizado}
                    </div>
                </>
            )}

            {!cargando && !error && entradas.length === 0 && (
                <p className="mensaje">
                    Aún no hay suficientes datos para el ranking en {categoriaElegida}.
                </p>
            )}

        </React.Fragment>
    );
}
export default Fase3;