import './postcard.css'
import { useContext, useState } from 'react';
import { CategoriaContext } from '../components/minis/CategoriasProvisor';

function PostCard({}) {
    const { categoriaElegida } = useContext(CategoriaContext);

    //Creamos el estado para guardar el texto y definir el límite.
    const [texto, setTexto] = useState("");
    const limiteCaracteres = 262; //Poesia "Es verdad" de Lorca; demostró que se puede contar mucho con poco. Aprendamos.
    //Para controlar la barra de colores
    const [barra, setBarra] = useState("");
    //La función se dispara cada vez que el usuario pulsa una tecla
    const manejarCambio = (evento) => {
        const nuevoTexto = evento.target.value;
        
        // Verificamos por seguridad (aunque el maxLength de HTML ya nos ayuda)
        if (nuevoTexto.length <= limiteCaracteres) {
            setTexto(nuevoTexto);
        }

        //Para manejar los estados de la barra
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



    return (
        <div className="postcard-main-container">
            <div className="postcard-main-container-div">
                <form className="postcard-form">
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
                    <button className="postcard-button" type="submit">Publicar</button>
                </form>
            </div>
        </div>
    );
}

export default PostCard;