import './catbut.css';

//Meter la función onclick en el botón para que nos redireccione a la web.
function CatBut({nombre, icon, onClick, estaActivo}) {

    const claseDelBoton = estaActivo ? "categoria-button activo" : "categoria-button";

    return (
        <>
            <div className={claseDelBoton} onClick={onClick}>
                <div className={"categoria-button-" + icon}></div>
                <p className="categoria-button-nombre">{nombre}</p>              
            </div>
        </>
    )};

    export default CatBut;