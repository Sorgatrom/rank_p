import { useContext,useRef } from 'react'; //usaremos el hook useContext para conectarnos a la "emisora de radio" y emitir la categoria seleccionada.
import { CategoriaContext, CategoriaProvisor } from '@/assets/utils/CategoriasProvisor';
import './catbar.css';
import CatBut from "./CatBut"



function CatBar({}) {
    // "Sintonizamos" la radio para leer la categoría actual Y la función para cambiarla.
    const { categoriaElegida, setCategoriaElegida } = useContext(CategoriaContext);

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
    
    //Haremos en el onClick la actualización de la Categoría
    return (
        <>  
            <div className="main-categoria-barra">
                <div className="retro-categoria-barra" onClick={() => moverScroll(-300)}></div>
                    <div id="categorybar" ref={contenedorRef} className="categoria-barra" >
                        {categorias.map((categoria, indice) => (
                            <CatBut key={indice} 
                            nombre={categoria} 
                            icon={categoria} 
                            onClick={()=>setCategoriaElegida(categoria)}
                            estaActivo={categoriaElegida === categoria}
                             />
                        ))}
                    </div>
                <div className="avan-categoria-barra" onClick={() => moverScroll(300)}></div>
            </div>
        </>
    )};

    export default CatBar;