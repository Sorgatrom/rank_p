import { useState } from 'react'
import './prewipeCard.css'
import { generateFakeName } from "../utils/generador_nombres"


//Las props que recibe el componente debe de llevar id.
function PreWipeCard({id, content}) {

    
    const [like, setlike] = useState(false);
    //Con esta solucion solo se genera una vez el nombre falso, y se mantiene el mismo aunque el componente se vuelva a renderizar por el cambio de estado del contador.
    const [name, setName] = useState(() => generateFakeName());

    const toggleLike = async () => {
        //OJO debemos guardar el botón antes de tocarlo
        const estadoAnterior = like;

        // ACTUALIZACIÓN OPTIMISTA!!: Cambiamos la vista instantáneamente !!! ESTO MOLA! lo cambia sin mandar info al back, pero el feedback es instantaneo
        setLike(!like);

        try {
            // Recuperamos el token del usuario logueado
            const token = localStorage.getItem('token');

            const respuesta = await fetch(`http://127.0.0.1:8000/api/entradas/${id}/like`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                }

            });

            //Si el servidor devuelve un error
            if (!respuesta.ok) {
                setLike(estadoAnterior); // Deshacemos el like visual
                console.error("Error en el servidor al guardar el like");
            } 
        } catch (error) {
            //por si no hay internet volvemos al estado anterior
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
                    <button onClick={toggleLike}>{like ? 'Like' : 'Unlike'}</button>
                </div>
            </div>
        </>
    )};

export default PreWipeCard;
