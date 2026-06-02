import './medallperfilprovisor.css';

// Definimos las 14 categorías en un array
const categorias = [
    "Entretenimiento", "Política", "Deportes", "Tecnología", 
    "Arte", "Viajes", "Moda", "Ciencia", 
    "Música", "Economía", "Salud", "Gastronomía", 
    "Videojuegos", "Cine"
];

// Función para quitar tildes y poner en minúsculas (Música -> musica)
const limpiarClase = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export function MedallaPerfilProvisor({ medallas }) {
    // Protegemos el código por si los datos de Laravel tardan en llegar
    const inventarioMedallas = medallas || [];

    const categoriasRenderizadas = categorias.map((categoriaActual) => {
        
        // Filtramos las medallas de esta categoría concreta
        const medallasCat = inventarioMedallas.filter(m => m.categoria === categoriaActual);
        
        const totalOro = medallasCat.filter(m => m.tipo === 'oro').length;
        const totalPlata = medallasCat.filter(m => m.tipo === 'plata').length;
        const totalBronce = medallasCat.filter(m => m.tipo === 'bronce').length;
        
        // Si no hay ninguna medalla, devolvemos null para no pintar esta categoría
        if ((totalOro + totalPlata + totalBronce) === 0) {
            return null;
        }

        const tieneLasTres = (totalOro > 0 && totalPlata > 0 && totalBronce > 0);
        const claseCompletada = tieneLasTres ? " categoria-completada" : "";

        // Creamos un nombre seguro para el CSS (ej: "musica", "politica")
        const catSegura = limpiarClase(categoriaActual);

        return (
            <>
                {/*Bloque de OROs: Solo se renderiza si hay 1 o más medallas de oro */}
                {totalOro > 0 && (
                    <div className="div-oro-s">
                        <p>{totalOro}</p>
                        <div className={`icono-${catSegura}-oro`}></div>
                    </div>
                )}

                {/*Bloques de PLATA: Solo se renderiza si hay 1 o más medallas de plata */}
                {totalPlata > 0 && (
                    <div className="div-plata-s">
                        <p>{totalPlata}</p>
                        <div className={`icono-${catSegura}-plata`}></div>
                    </div>
                )}
                
                {/*Bloque de BRONCE: Solo se renderiza si hay 1 o más medallas de bronce */}
                {totalBronce > 0 && (
                    <div className="div-bronce-s">
                        <p>{totalBronce}</p>
                        <div className={`icono-${catSegura}-bronce`}></div>
                    </div>
                )}
            </>  
        );
    });

    return (
        <div className="medalla-div">
            <div className="nombre-cabecera">
                <div className="logo-medalla"></div>
                <p>Inventario</p>
            </div>
            
            <div className="bloque-medallas">
                {categoriasRenderizadas}
            </div>
        </div>
    );
}

export default MedallaPerfilProvisor;
