import './postcard.css'
import { useContext, useState } from 'react';
import { CategoriaContext } from '@/assets/utils/CategoriasProvisor';
import { TokenContext } from '@/assets/utils/TokenProvisor';

import { useTimer } from '@/assets/utils/TimerProvisor'; //Importamos el reloj

function PostCard({}) {
    const { categoriaElegida } = useContext(CategoriaContext);

    //Extraemos la fase actual del reloj para desactivar la escritura
    const { fase } = useTimer();

    //Creamos el estado para guardar el texto y definir el límite.
    const [texto, setTexto] = useState("");
    const limiteCaracteres = 262; //Poesia "Es verdad" de Lorca; demostró que se puede contar mucho con poco. Aprendamos.
    //Para controlar la barra de colores
    const [barra, setBarra] = useState("postcard-counter");
    //La función se dispara cada vez que el usuario pulsa una tecla

    //Estado para mostrar mensajes de éxito o error al usuario
    const [mensaje, setMensaje] = useState("");

    //Nos traemos los tokens para jugar con ellos cuando no haya tokens
    const { tokens, setTokens } = useContext(TokenContext);

    //EL CANDADO VISUAL: Retorno temprano si no es Fase 1!!!!!! Pero tampoco dejaremos que se puedan hacer publicaciones en otras fases en el back por si las moscas
    // Al ponerlo aquí, React ignora todo el código de abajo y no pinta nada en el DOM.
    if (fase !== 1) {
        return null;
    };

    const manejarCambio = (evento) => {
        const nuevoTexto = evento.target.value;
        
        // Verificamos por seguridad (aunque el maxLength de HTML ya ayuda)
        if (nuevoTexto.length <= limiteCaracteres) {
            setTexto(nuevoTexto);
        }

        //Para manejar los estados de la barra de colores
        if (nuevoTexto.length <= 52.5 ){
            setBarra("postcard-counter")
        } else if (nuevoTexto.length > 52.6 && nuevoTexto.length <= 105){
            setBarra("postcard-counter-green")
        } else if (nuevoTexto.length > 106 && nuevoTexto.length <= 158){
            setBarra("postcard-counter-yellow")
        } else if (nuevoTexto.length > 159 && nuevoTexto.length <= 212){
            setBarra("postcard-counter-orange")
        } else if (nuevoTexto.length > 213 && nuevoTexto.length <= 262){
            setBarra("postcard-counter-red")
        };
    };

    //La función que se ejecuta al darle al botón "Publicar"
    const manejarSubmit = async (evento) => {
        evento.preventDefault(); // Evitamos que la página se recargue

        // OJO!!!!! no publicar si está vacío.
        if (texto.trim() === "") return;

        const token = localStorage.getItem('token');

        try {
            const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/api/entradas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                // Enviamos el texto y la categoría extraída del Contexto
                body: JSON.stringify({ 
                    contenido: texto, 
                    categoria: categoriaElegida 
                })
            });

            const datos = await respuesta.json();

            if (respuesta.ok) {
                //Avisamos de los tokens, limpiamos el texto y reseteamos la barra
                setMensaje(`¡Publicado! Tokens restantes: ${datos.tokens_restantes}`);
                setTexto(""); 
                setBarra("postcard-counter");
                 
            } else {
                // Si no hay saldo u ocurre otro error en Laravel
                setMensaje(datos.mensaje || 'Error al publicar');
            }
        } catch (error) {
            setMensaje("Error de conexión con el servidor");
        }
    };

    //Si el usuario no tiene tokens, se pinta esto y se detiene aquí.
    if (tokens <= 0) {
        return (
            <div className="postcard-main-container-2">
                <div className="postcard-main-container-div-2">
                    <div className="postcard-main-container-div-div">
                        <h3>Has agotado tus tokens </h3>
                        <div className='postacrd-token-logo'></div>
                    </div>
                    <p>
                        No puedes publicar más por ahora. Vuelve mañana para seguir aportando a la comunidad.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="postcard-main-container">
            <div className="postcard-main-container-div">
                <form className="postcard-form" onSubmit={manejarSubmit}>
                    <div className="postcard-form-textarea" >
                        {/* Hemos corregido la sintaxis del placeholder aquí */}
                        <textarea 
                            rows="4" 
                            placeholder={`Escribe algo sobre ${categoriaElegida}`} 
                            maxLength={limiteCaracteres} 
                            value={texto}
                            onChange={manejarCambio}
                            autoFocus
                        />
                        <p>{texto.length} / {limiteCaracteres} Tip: Longitud del poema "Es Verdad" de F.G. Lorca</p>
                        <div className={barra}>

                        </div>
                    </div>
                    {mensaje && <p style={{ textAlign: 'center', margin: '5px 0', fontSize: '14px', color: 'gray' }}>{mensaje}</p>}
                    <button 
                        className="postcard-button" 
                        type="submit"
                        disabled={!categoriaElegida || categoriaElegida === ""} // El botón se apaga si no hay categoría
                        style={{ 
                        opacity: !categoriaElegida ? 0.5 : 1, 
                        cursor: !categoriaElegida ? 'not-allowed' : 'pointer' 
                    }}>{categoriaElegida ? 'Publicar' : 'Elige una categoría'}</button>
                </form>
            </div>
        </div>
    );
}

export default PostCard;