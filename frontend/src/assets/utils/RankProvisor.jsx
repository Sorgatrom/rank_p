
//Crearemos una función que podamos exportar para definir lo número del 1, 2 y 3 que se sutituiran sus número por medallas.

import './rankprovisor.css';

export function RankProvisor({ children }) {

    //Convertimos el valor a Número por si acaso React lo envía como Texto
    const numero = Number(children);

    // Comprobamos si el puesto es 1, 2 o 3
    if (numero === 1 || numero === 2 || numero === 3) {

        return <p className={`puesto-${children}`}></p>;
    } 

    // Si no entró en el if corre esto.
    return <p className="puesto-normal">{children}</p>;
}

export default RankProvisor;

