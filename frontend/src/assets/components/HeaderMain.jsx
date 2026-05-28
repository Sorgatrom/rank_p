import './headerMain.css';
import { useState, useEffect, useContext } from 'react';
import { TimerFlag } from "../utils/TimerFlag.jsx"
import { TokenContext } from './minis/TokenProvisor.jsx'


function HeaderMain({user}) {
    //Nos traemos la variable del TokenProvisor
    const { tokens } = useContext(TokenContext);

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
                    <TimerFlag mensaje1="Contribuye" mensaje2="Cribado" mensaje3="Resultados"/>
                    <p>{tokens}/1</p>
                    <div className="header-main-info-div2"></div>
                    <div className="header-main-user">
                    </div>
                </div>
            </div>
        </>
    )};

    export default HeaderMain;