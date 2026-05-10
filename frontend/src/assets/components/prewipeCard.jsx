    import { useState } from 'react'
    import './prewipeCard.css'
    import { generateFakeName } from "../utils/generador_nombres"

    function PreWipeCard({number, content}) {
    const [count, setCount] = useState(0)

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
                <div className="prewipe-card-like">
                    <button onClick={() => setCount(count + 1)}>Like</button>
                </div>
            </div>
        </>
    )};

    export default PreWipeCard;
