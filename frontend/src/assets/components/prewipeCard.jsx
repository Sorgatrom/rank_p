import { useState } from 'react'
import './prewipeCard.css'
import { generateFakeName } from "../utils/generador_nombres"

function PreWipeCard({number, content}) {

    
    const [like, setlike] = useState(false);

    function toggleLike() {
        //Aquí se podría agregar lógica adicional para manejar el estado del "like", como enviar una solicitud a un servidor o actualizar un contador de "likes". Por ahora, simplemente alternamos el estado entre "like" y "unlike".
        setlike(!like);
    }

    //Con esta solucion solo se genera una vez el nombre falso, y se mantiene el mismo aunque el componente se vuelva a renderizar por el cambio de estado del contador.
    const [name, setName] = useState(() => generateFakeName());

    return (
        <>
            <div className="prewipe-card">
                <div className="prewipe-card-number">
                    <p>{number}</p>
                </div>
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
