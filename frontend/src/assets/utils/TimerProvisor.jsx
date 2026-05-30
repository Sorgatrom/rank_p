import React, { createContext, useState, useEffect, useContext } from 'react';

//Creamos el contexto vacío
const TimerContext = createContext();

//Creamos el "Proveedor" que envolverá a nuestra app
export const TimerProvisor = ({ children }) => {
    
    // Función ayudante para calcular las fases 
    const calcularFaseActual = () => {
        const timeMadrid = new Date().toLocaleTimeString("en-US", {
            timeZone: "Europe/Madrid", 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
        });

        if (timeMadrid >= "02:00" && timeMadrid < "18:00") return 1;
        if (timeMadrid >= "18:00" && timeMadrid < "21:00") return 2;
        return 3;
    };

    // Estado global de la fase
    const [fase, setFase] = useState(calcularFaseActual());

    useEffect(() => {
        const intervalo = setInterval(() => {
            const nuevaFase = calcularFaseActual();
            
            // IMPORTANTE: Solo actualizamos si la fase realmente ha cambiado.
            // Así evitamos que la app se recargue entera cada 30 segundos si seguimos en la misma fase.
            setFase((faseAnterior) => {
                if (nuevaFase !== faseAnterior) {
                    return nuevaFase;
                }
                return faseAnterior; // Si es igual, lo dejamos como estaba
            });

        }, 30000); 

        return () => clearInterval(intervalo);
    }, []);

    //Entregamos la 'fase' a cualquier hijo que la pida
    return (
        <TimerContext.Provider value={{ fase }}>
            {children}
        </TimerContext.Provider>
    );
};

//Creamos un "Custom Hook" para que usarlo facilisimo, lo usaremos para saber que pedir al back.
export const useTimer = () => useContext(TimerContext);