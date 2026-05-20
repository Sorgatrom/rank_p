import './prewipecardpubli.css'

function PreWipeCardPubli({name,content, marca, url}) {

    //para redirigir a una marca
    const manejarClick = () =>{
        window.open(url, '_blank');
    };

    return (
        <>
            <div className="prewipe-card-publi-main" onClick={manejarClick}>
                <div className="prewipe-card-publi-contenido">
                    <p className="prewipe-card-publi-contenido-name-adv">Publicidad - Click para ir a Promoción</p>
                    <div className="prewipe-card-publi-contenido-name">
                        <h2>{name}</h2>
                        <div className={"prewipe-card-publi-" + marca}></div>
                    </div>
                    <p>{content}</p>
                </div>
                <div className="prewipe-card-publi-icon"></div>
            </div>
        </>
    )};

export default PreWipeCardPubli;