import { useState, useEffect } from "react";

export const TimerFlag = ({mensaje1, mensaje2, mensaje3}) => {
    //Necesitamos calcular correctamente en que posición está nada mas arrancar la pag, no podemos esperar 1minuto a que se actualice 
    const calcularSwitcherActual = () => {
        const timeMadrid = new Date().toLocaleTimeString("en-US", {
            timeZone: "Europe/Madrid", 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
        });

        if (timeMadrid >= "02:00" && timeMadrid < "18:00") {
            return 1;
        } else if (timeMadrid >= "18:00" && timeMadrid < "21:00") {
            return 2;
        } else {
            return 3;
        }
    };

    //Empezamos con el estado calculado por defecto
    const [switcher, setSwitcher] = useState(calcularSwitcherActual());

    useEffect(()=>{
        //Creamos el temporizador para que mire la hora cada minuto (60000ms)
        const intervalo = setInterval(()=> {

            const timeMadrid = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/Madrid", hour: '2-digit', minute: '2-digit',hour12: false});
            let nuevoSwitcher = 1;

            //Gestionamos el switcher según la hora de Madrid.
            if (timeMadrid >= "02:00" && timeMadrid < "18:00") {
                nuevoSwitcher = 1;
            } else if (timeMadrid >= "18:00" && timeMadrid < "21:00") {
                nuevoSwitcher = 2;
            } else {
                nuevoSwitcher = 3;
            };

            //Le decimos a React: "Oye, actualiza la memoria con el nuevo número"
            setSwitcher(nuevoSwitcher);

        }, 30000); //Se actualizará cada medio minuto
        
        //Destruimos el reloj si cerramos la página
        return () => clearInterval(intervalo);
    }, []);

    //Devolvemos el HTML basándonos en la "memoria" (switcher) actual
    if (switcher === 1) {
        return (<div className="header-main-info-div"><p>{mensaje1}</p> <div className="header-main-info-div1-green"></div></div>);
    } else if (switcher === 2) {
        return (<div className="header-main-info-div"><p>{mensaje2}</p><div className="header-main-info-div1-orange"></div></div>);
    } else if (switcher === 3) {
        return (<div className="header-main-info-div"><p>{mensaje3}</p><div className="header-main-info-div1-red"></div></div>);
    };
}; 


//Esta función la necesitaremos para hacer saltar la lágica de reseteo
/*export const timerFlagSwitcher = () => {
    let switcher = 0;

    //Gestionamos el switcher según la hora de Madrid.
    if (timeMadrid >= "02:00" && timeMadrid < "18:00") {
        switcher = 1;
        return switcher;
    } else if (timeMadrid >= "18:00" && timeMadrid < "21:00") {
        switcher = 2;
        return switcher;
    } else {
        switcher = 3;
        return switcher;
    };
};*/