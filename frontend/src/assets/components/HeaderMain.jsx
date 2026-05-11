import './headerMain.css';

function HeaderMain({user, tokens}) {

    return (
        <>
            <div className="header-main">
                <div className="header-main-logo" src="-/resources/Iconos/logo ppal svg.svg"/>
                <div className="header-main-search">
                    <form>
                        <input type="text" placeholder="Buscar..." />
                    </form>
                </div>
                <div className="header-main-info">
                    <p>23:00:12</p>
                    <div className="header-main-info-div1"></div>
                    <p>{tokens}/1</p>
                    <div className="header-main-info-div2"></div>
                    <div className="header-main-user">
                    </div>
                </div>

            </div>

        </>
    )};

    export default HeaderMain;