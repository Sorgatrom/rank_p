import React from "react";
import { useTimer } from './TimerProvisor'; // Importamos nuestro hook

export const TimerFlag = ({mensaje1, mensaje2, mensaje3}) => {
    
    //Dame la fase actual del contexto global
    const { fase } = useTimer(); 

    //Devolvemos el HTML basándonos directamente en la variable 'fase'
    if (fase === 1) {
        return (<div className="header-main-info-div"><p>{mensaje1}</p> <div className="header-main-info-div1-green"></div></div>);
    } else if (fase === 2) {
        return (<div className="header-main-info-div"><p>{mensaje2}</p><div className="header-main-info-div1-orange"></div></div>);
    } else if (fase === 3) {
        return (<div className="header-main-info-div"><p>{mensaje3}</p><div className="header-main-info-div1-red"></div></div>);
    };
    
    return null; // Por si acaso
};