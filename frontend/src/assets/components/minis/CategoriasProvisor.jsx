import {createContext, useState} from 'react';
// Esto que vamos a hacer se llama CONTEXT API, como las categorias necesitamos escucharlas constantemente la
//meteremos en un grupo que esté constantemente siendo escuchadas y podamos llamar a este "estado" desde
//otros componentes, esto se hace a través del createContext. VAmos a tratarlo como una emisora de radio que emite una señal.

//Creamos la "Emisora" vacía.
export const CategoriaContext = createContext();

//Creamos el emisor que transmite la señal y guarda el estado.
export function CategoriaProvisor({children}) {
    const [categoriaElegida, setCategoriaElegida] = useState("Entretenimiento");

    return (
        //todo lo que esté dentro del children podrá escuchar la "radio"
        //Ahora tendremos que envorver los elementos que necesitemos que escuchen dentro de este provider.
        <CategoriaContext.Provider value={{categoriaElegida, setCategoriaElegida}}>
            {children}
        </CategoriaContext.Provider>
    );
}