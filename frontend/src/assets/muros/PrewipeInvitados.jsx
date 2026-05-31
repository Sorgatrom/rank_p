import './prewipeinvitados.css'
import React, { useState, useEffect, useContext } from 'react';
import { CategoriaContext } from '../utils/CategoriasProvisor'
import PrewipeCardPubli from '../components/PrewipeCardPubli'
import Logincardxcontent from '../components/Logincardxcontent'
import Logincardx from '../components/Logincardx'

function PrewipeInvitado() {
    //La RADIO! Sintonizamos la categoría!
    const {categoriaElegida} = useContext(CategoriaContext);

    //Estados para guardar los datos y el efecto de carga
    const [entradas, setEntradas] = useState([]);
    const [cargando, setCargando] = useState(false);

    //El efecto corre al cambiar la categoria 
    useEffect(()=>{

        const cargarEntradas = async () => {
            setCargando(true);
            try {
                //Petición a ruta pública sin token!!! como invitado.
                const respuesta = await fetch(`http://127.0.0.1:8000/api/publico/entradas/${categoriaElegida}`);

                if (respuesta.ok) {
                    const datos = await respuesta.json();
                    setEntradas(datos);
                }
            } catch (error) {
                console.error("Error al cargas las entradas públicas", error);
            }
            setCargando(false);
        }
        cargarEntradas();
    }, [categoriaElegida]);

    //Guardamos las entradas devueltas en un .map para llarmas ahora en el return
    //Aquí meteremos la lógica de la publicidad y el final de publicaciones para invitar al usuario a que se loggee
    //usaremos las caracteristicas del .map y sus índices.
    const tarjetasRenderizadas = entradas.map((entrada, index) => {
        //Podemos hacer lo que queramos en el feed de invitado
        if (index === 3 || index == 7) {
            //En la 4 posicion metemos publicidad, quizás para penalizar aún mas que no seas usuario se podría meter aún más
            return (
                //Podemos hacer una tabla con las marcas y no hardcodear esto (publicidad)... para un futuro...!!!!!!!! el key en el fragment!
                <React.Fragment key={`grupo-${entrada.id}`}>

                    <PrewipeCardPubli
                        name="Coca-Cola" 
                        content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" 
                        marca="cocacola" 
                        url="https://www.coca-cola.com/es/es"
                    />

                    <Logincardxcontent content={entrada.contenido}/>

                </React.Fragment>
            );
        }

        //Fuera del if, metemos las entradas normales,
        return <Logincardxcontent key={entrada.id} id={entrada.id} content={entrada.contenido} />;
    });
    
    return (
        <React.Fragment>    
            {cargando && <div className="cargando-logo"></div>}

            {!cargando && entradas.length > 0 && (
                <>
                    {/*Imprimimos la lista de entradas (que ya lleva la publi camuflada en medio) */}
                    {tarjetasRenderizadas}
                    
                    {/*Cuando se acaban, colocamos la tarjeta de invitación de login */}
                    <Logincardx />
                </>
            )}

            {!cargando && entradas.length === 0 && (
                <p className="mensaje">
                    Aún no hay publicaciones en {categoriaElegida}. ¡Anímate a entrar!
                </p>
            )}    
        </React.Fragment>
    )
    
}

export default PrewipeInvitado;
