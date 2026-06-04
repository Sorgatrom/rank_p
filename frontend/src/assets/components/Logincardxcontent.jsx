import './prewipeCard.css'
import { useState } from 'react'
import { generateFakeName } from "@/assets/utils/generador_nombres"

function Logincardxcontent({content}) {

    
    //Con esta solucion solo se genera una vez el nombre falso, y se mantiene el mismo aunque el componente se vuelva a renderizar por el cambio de estado del contador.
    const [name, setName] = useState(() => generateFakeName());

    return (
        <>
            <div className="prewipe-card">
                <div className="prewipe-card-fakenameandcontent">
                    <h2>{name}</h2>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )};

export default Logincardxcontent;