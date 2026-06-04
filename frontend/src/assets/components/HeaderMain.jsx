import './headerMain.css';
import { useState, useEffect, useContext } from 'react';
import { TimerFlag } from "@/assets/utils/TimerFlag.jsx"; // Tu banderita inteligente
import { TokenContext } from '@/assets/utils/TokenProvisor.jsx';
import { Link } from 'react-router-dom';

function HeaderMain({}) {
    // Nos traemos la variable del TokenProvisor
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
                    <Link to="/perfil" className="boton-menu">
                        <div className="header-main-user"></div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default HeaderMain;