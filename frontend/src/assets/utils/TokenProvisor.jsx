import { createContext, useState, useEffect } from 'react';

//Creamos el contexto "LA EMISAORA DE RADIO"
export const TokenContext = createContext();

export function TokenProvisor({children}) {
    const [tokens, setTokens] = useState(0); 



    //Cargaremos la app y preguntaremos cuantos tokens tenemos
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) return; //Si no hay token en el localStorage, no hacemos nada

            try {
                const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    }
                });

                if (respuesta.ok) {
                    const usuario = await respuesta.json();
                    setTokens(usuario.tokens); //Guardamos tokens iniciales
                } 

            }catch (error) {
                console.error("Error al cargar el usuario", error)
            }
        };

        fetchUser();
    }, []);

    //Compartimos la variable "tokens" y la función para actualizarla
        return (
            <TokenContext.Provider value={{ tokens, setTokens }}>
                {children}
            </TokenContext.Provider>
        );
}