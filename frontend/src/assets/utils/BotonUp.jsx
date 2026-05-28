import { useState, useEffect } from 'react';
import './botonup.css';

function BotonUp() {
//Vamos a crear un botón que cuando bajemos nos de la posibilidad de subir arriba del todo
//Estado para controlar si el botón se ve o no
    const [mostrarBoton, setMostrarBoton] = useState(false);


    //Revisamos la posición del scroll y mostramos botón según las condiciones
    const controlarScroll = () => {
        if (window.scrollY > 300) {
            setMostrarBoton(true);
        } else {
            setMostrarBoton(false);
        }
    };

    //Función para subir suavito
    const subirArriba = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Esto hace que suba con un efecto de deslizamiento
        });
    };

    //Escuchamos el evento de scroll cuando el componente se monta
    useEffect(() => {
        window.addEventListener('scroll', controlarScroll);
        
        // Limpiamos el evento cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', controlarScroll);
        };
    }, []);

    return (
        <>
            {/* Si mostrarBoton es true, dibujamos el botón */}
            {mostrarBoton && (
                <button className="boton-subir" onClick={subirArriba}>
                    ⬆️
                </button>
            )}
        </>
    );
}

export default BotonUp;