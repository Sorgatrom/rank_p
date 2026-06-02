import './medallprovisor.css';


export function MedallProvisor({ medallas }) {

    //Si medallas es null o undefined (porque el fetch está cargando), usamos un array vacío []
    const inventarioMedallas = medallas || [];

    // Contamos cuantas medallas hay en total por cada material
    const totalOro = inventarioMedallas.filter(medalla => medalla.tipo === 'oro').length;
    const totalPlata = inventarioMedallas.filter(medalla => medalla.tipo === 'plata').length;
    const totalBronce = inventarioMedallas.filter(medalla => medalla.tipo === 'bronce').length;

    // Variables para controlar si hay o no medallas
    let hayOro = "-no";
    let hayPlata = "-no";
    let hayBronce = "-no";
    let noHay = "-si"; // Por defecto mostramos el contenedor
    
    if(totalOro > 0) { hayOro = "-si" } 
    if(totalPlata > 0) { hayPlata = "-si" }
    if(totalBronce > 0) { hayBronce = "-si" }
    
    // 3. Lógica más limpia para ocultar el contenedor principal:
    // Si la suma de todas las medallas es 0, ocultamos el div entero
    if((totalOro + totalPlata + totalBronce) === 0) { 
        noHay = "-n"; 
    }

    return(
        <>
            <div className={`div-medallas${noHay}`}>
                <div className={`div-oro${hayOro}`}>
                    <p>{totalOro}</p>
                    <div></div>
                </div>

                <div className={`div-plata${hayPlata}`}>
                    <p>{totalPlata}</p>
                    <div></div>
                </div>
                
                <div className={`div-bronce${hayBronce}`}>
                    <p>{totalBronce}</p>
                    <div></div>
                </div>
            </div>
        </>
    )
}
export default MedallProvisor;



    //Por ahora simulamos lo que el back nos enviaría.
    /*const inventarioMedallas = [
        { id: 1, tipo: 'oro', categoria: 'Entretenimiento' },
        { id: 2, tipo: 'oro', categoria: 'Entretenimiento' },
        { id: 3, tipo: 'plata', categoria: 'Entretenimiento' },
        { id: 4, tipo: 'bronce', categoria: 'Arte' },
        { id: 5, tipo: 'oro', categoria: 'Deportes' }
    ];*/