import './postcard.css'
import {useState} from 'react';

function PostCard({}) {
    //----- para manejar el contador de caracteres del textarea -----   
    const [contador, setContador] = useState(0);

    //----- para manejar el contador de caracteres del textarea -----

    return (
            <div className="postcard-main-container">
                <div className="postcard-main-container-div">
                    <form className="postcard-form">
                        <div className="postcard-form-textarea" >
                            <textarea rows="4" placeholder="¿Aún no has publicado? Ánimo..." maxLength="280" autoFocus/>
                            <div className="postcard-counter"></div>
                        </div>
                        <button className="postcard-button" type="submit">Publicar</button>
                    </form>
                </div>
            </div>

    )};

export default PostCard;