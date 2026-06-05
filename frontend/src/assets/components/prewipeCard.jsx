import { useState, useEffect } from 'react'
import './prewipeCard.css'
import { generateFakeName } from "@/assets/utils/generador_nombres"


// Las props que recibe el componente debe de llevar id.
function PreWipeCard({id, content, yaLeDiLike}) {

    //Convertimos estrictamente lo que llegue de Laravel a un Booleano (por si llega un 1 o un 0)
    const estadoInicial = yaLeDiLike === true || yaLeDiLike === 1;

    //Para saber si le he dado like a algo o no.
    const [like, setLike] = useState(estadoInicial);

    //EL VIGILANTE: Si Laravel actualiza el prop 'yaLeDiLike', forzamos al botón a cambiar
    useEffect(() => {
        setLike(yaLeDiLike === true || yaLeDiLike === 1);
    }, [yaLeDiLike]);
    
    // Con esta solucion solo se genera una vez el nombre falso...
    const [name, setName] = useState(() => generateFakeName());

    const toggleLike = async () => {
        // OJO debemos guardar el botón antes de tocarlo
        const estadoAnterior = like;

        // ACTUALIZACIÓN OPTIMISTA
        setLike(!like);

        try {
            // Recuperamos el token del usuario logueado
            const token = localStorage.getItem('token');

            const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/api/entradas/${id}/like`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }
            });

            // Si el servidor devuelve un error
            if (!respuesta.ok) {
                setLike(estadoAnterior); // Deshacemos el like visual
                console.error("Error en el servidor al guardar el like");
            } 
        } catch (error) {
            // por si no hay internet volvemos al estado anterior
            setLike(estadoAnterior);
            console.error("Fallo de conexión", error);
        }
    }

    return (
        <>
            <div className="prewipe-card">
                <div className="prewipe-card-fakenameandcontent">
                    <h2>{name}</h2>
                    <p>{content}</p>
                </div>
                <div className={`prewipe-card${like ? '-liked' : '-like'}`}>
                    <button onClick={toggleLike}>{like ? 'Unlike' : 'Like'}</button>
                </div>
            </div>
        </>
    );
}

export default PreWipeCard;
