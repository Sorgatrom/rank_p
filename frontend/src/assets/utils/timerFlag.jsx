const timeMadrid = new Date().toLocaleTimeString("en-US", {timeZone: "Europe/Madrid", hour: '2-digit', minute: '2-digit',hour12: false});
export const timerFlag = ({mensaje1, mensaje2, mensaje3}) => {
    let switcher = 0;

    //Gestionamos el switcher según la hora de Madrid.
    if (timeMadrid >= "02:00" && timeMadrid < "18:00") {
        switcher = 1;
    } else if (timeMadrid >= "18:00" && timeMadrid < "21:00") {
        switcher = 2;
    } else {
        switcher = 3;
    };

    //Se inyecta html según nuestro siwtcher.
    if (switcher === 1) {
        return (<div className="header-main-info-div"><p>{mensaje1}</p> <div className="header-main-info-div1-green"></div></div>);
    } else if (switcher === 2) {
        return (<div className="header-main-info-div"><p>{mensaje2}</p><div className="header-main-info-div1-orange"></div></div>);
    } else if (switcher === 3) {
        return (<div className="header-main-info-div"><p>{mensaje3}</p><div className="header-main-info-div1-red"></div></div>);
    };
}; 


//Esta función la necesitaremos para hacer saltar la lágica de reseteo
export const timerFlagSwitcher = () => {
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
};