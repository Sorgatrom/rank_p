import { useRef } from 'react';
import './catbar.css';
import CatBut from "./minis/CatBut"



function CatBar({}) {

    //Array de datos, nos pensaremos si externalizar esto por si queremos ampliar después
    const categorias = [
        "Entretenimiento", 
        "Política", 
        "Deportes", 
        "Tecnología", 
        "Arte", 
        "Viajes", 
        "Moda", 
        "Ciencia", 
        "Música", 
        "Economía", 
        "Salud", 
        "Gastronomía", 
        "Videojuegos", 
        "Cine"]
    //La referencia para enlazarla a nuestro div
    const contenedorRef = useRef(null);

    //Funcion que mueve el scroll al hacer click
    const moverScroll = (distancia) => {
        if (contenedorRef.current) {
            contenedorRef.current.scrollBy({
            left: distancia,
            behavior: 'smooth'
            });
        }
    };
    
    return (
        <>  
            <div className="main-categoria-barra">
                <div className="retro-categoria-barra" onClick={() => moverScroll(-300)}></div>
                <div ref={contenedorRef} className="categoria-barra" >
                    {categorias.map((categoria, indice) => (
                        <CatBut key={indice} nombre={categoria} icon={categoria} />
                    ))}
                </div>
                <div className="avan-categoria-barra" onClick={() => moverScroll(300)}></div>
            </div>
        </>
    )};

    export default CatBar;