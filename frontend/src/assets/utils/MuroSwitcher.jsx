//Este componente será el encargado de cambiar entre fases y pintarlas; estas fases las hemos diseñado en "muros"
import React from 'react';
import {useTimer} from '@/assets/utils/TimerProvisor.jsx';

import './muroswitcher.css';

//importamos las fases
import Fase1 from '../muros/Fase1.jsx';
import Fase2 from '../muros/Fase2.jsx';
import Fase3 from '../muros/Fase3.jsx';

export const MuroSwitcher = () => {
    //Le preguntamos al contexto en qué fase estamos
    const { fase } = useTimer();

    //Según la fase, devolvemos un componente entero u otro
    if (fase === 1) {
        return <Fase1 />;
    } 
    
    if (fase === 2) {
        return <Fase2 />;
    } 
    
    if (fase === 3) {
        return <Fase3 />;
    }

    //Por si acaso la fase tarda en cargar
    return <div className="cargando_icono"></div>;
};