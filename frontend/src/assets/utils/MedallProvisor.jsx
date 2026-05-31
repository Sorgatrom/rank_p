import './medallprovisor.css';

export function MedallProvisor({}){

    //Por ahora simulamos lo que el back nos enviaría.
    const inventarioMedallas = [
        { id: 1, tipo: 'oro', categoria: 'Entretenimiento' },
        { id: 2, tipo: 'oro', categoria: 'Entretenimiento' },
        { id: 3, tipo: 'plata', categoria: 'Entretenimiento' },
        { id: 4, tipo: 'bronce', categoria: 'Arte' },
        { id: 5, tipo: 'oro', categoria: 'Deportes' }
    ];

    //Contamos cuantas medallas hay en total por cada material (oro, plata y bronce)
    const totalOro = inventarioMedallas.filter(medalla => medalla.tipo === 'oro').length
    const totalPlata = inventarioMedallas.filter(medalla => medalla.tipo === 'plata').length
    const totalBronce = inventarioMedallas.filter(medalla => medalla.tipo === 'bronce').length

    //Variables para controlar si hay o no medallas
    let hayOro = "-n";
    let hayPlata = "-n";
    let hayBronce = "-n";
    let noHay = "-s";
    
    if(totalOro > 0){hayOro = "-s"}; 
    if(totalPlata > 0){hayPlata = "-s"};
    if(totalBronce > 0){hayBronce = "-s"};
    if(totalOro <= 0 && totalPlata <= 0 && totalBronce <= 0 || inventarioMedallas == null){noHay = "-n"}
    

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