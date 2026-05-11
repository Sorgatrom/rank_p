import './headerMain.css';

function HeaderMain({user, tokens}) {

    return (
        <>
            <div className="header-main">
                <div className="header-main-logo" src="-/resources/Iconos/logo ppal svg.svg"/>
                <div className="header-main-search">
                    <img className="header-main-buscar" src="../resources/iconos/Iconos categorias.svg" />
                    <form>
                        <input type="text" placeholder="Buscar..." />
                    </form>
                </div>
                <div className="header-main-info">
                    <p></p>
                    <img></img>
                    <p>{tokens}/1</p>
                    <img></img>
                </div>
                <div>
                    <img></img>
                </div>
            </div>

        </>
    )};

    export default HeaderMain;