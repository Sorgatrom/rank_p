import './postcard.css'
import { useContext } from 'react';
import { CategoriaContext } from '../components/minis/CategoriasProvisor';

function PostCard({}) {
    const { categoriaElegida } = useContext(CategoriaContext);

    return (
        <div className="postcard-main-container">
            <div className="postcard-main-container-div">
                <form className="postcard-form">
                    <div className="postcard-form-textarea" >
                        {/* Hemos corregido la sintaxis del placeholder aquí */}
                        <textarea 
                            rows="4" 
                            placeholder={`Escribe algo sobre ${categoriaElegida}`} 
                            maxLength="280" 
                            autoFocus
                        />
                        <div className="postcard-counter"></div>
                    </div>
                    <button className="postcard-button" type="submit">Publicar</button>
                </form>
            </div>
        </div>
    );
}

export default PostCard;