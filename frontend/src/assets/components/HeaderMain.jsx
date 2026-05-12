import './headerMain.css';
import { timerFlag, timerFlagSwitcher } from "../utils/timerFlag.jsx"

function HeaderMain({user, tokens}) {

    return (
        <>
            <div className="header-main">
                <div className="header-main-logo" src="./resources/Iconos/logo ppal svg.svg"/>
                <div className="header-main-search">
                    <form>
                        <input type="text" placeholder="Buscar.." />
                    </form>
                </div>
                <div className="header-main-info">
                    {timerFlag({mensaje1: "Contribuye", mensaje2: "Cribado", mensaje3: "Resultados"})}
                    <p>{tokens}/1</p>
                    <div className="header-main-info-div2"></div>
                    <div className="header-main-user">
                    </div>
                </div>
            </div>
        </>
    )};

    export default HeaderMain;