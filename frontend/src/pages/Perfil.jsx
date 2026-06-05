import './perfil.css'
import React, { useState, useEffect } from 'react';
import Headerinv from '../assets/components/Headerinv.jsx'
import MedallaPerfilProvisor from '@/assets/utils/MedallPerfilProvisor.jsx';
import { useNavigate } from 'react-router-dom';

function Perfil() {
    //Estados para guardar la información
    const [cargando, setCargando] = useState(true);
    const [datosUsuario, setDatosUsuario] = useState(null);
    
    //Estados específicos para los campos que el usuario puede modificar
    const [biografia, setBiografia] = useState('');
    const [url, setUrl] = useState('');
    
    //para volver
    const navigate = useNavigate();

    //Pedimos los datos al cargar la pantalla
    useEffect(() => {
        const pedirDatos = async () => {
            try {
                const token = localStorage.getItem('token');
                
                const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/api/user`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (respuesta.ok) {
                    const datos = await respuesta.json();
                    setDatosUsuario(datos);
                    
                    // Aseguramos que leemos las columnas correctas de tu BD
                    setBiografia(datos.bio || ''); 
                    setUrl(datos.socialmed || ''); 
                }

            } catch (error) {
                console.error("Error al obtener los datos del perfil:", error);
            } finally {
                setCargando(false);
            }
        };

        pedirDatos();
    }, []);

//encargado de hacer la petición PUT a Laravel
    const enviarActualizacionAlBackend = async (datosAEnviar) => {
        const token = localStorage.getItem('token');
        try {
            const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/api/user/perfil`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(datosAEnviar)
            });
            
        } catch (error) {
            console.error("Error de conexión:", error);
        }
    };


    const manejarActualizacionBio = (e) => {
        e.preventDefault();
        enviarActualizacionAlBackend({ bio: biografia });
    };

    const manejarActualizacionUrl = (e) => {
        e.preventDefault();
        enviarActualizacionAlBackend({ socialmed: url });
    };

    if (cargando) {
        return <div className="loader"></div>;
    }

    return (
        <div className="perfil-contenedor">
            <div className="perfil-logos">
                <div className="boton-dashboard" onClick={() => navigate('/dashboard')}>
                    <div className="logo-dashboard"></div>
                    <p>Volver</p>
                </div>
                <div className="boton-loggout">
                    <div className="logo-loggout"></div>
                    <p>Desconectar</p>
                </div>
            </div>

            {/*Sustituimos los textos fijos por las variables del backend */}
            <div className="nombre-div">
                <h1>@{datosUsuario.name || datosUsuario.username}</h1>
                <h3>{datosUsuario.email}</h3>
            </div>

            {/*Le pasamos las medallas al componente hijo*/}
            <MedallaPerfilProvisor medallas={datosUsuario.medallas} />
            
            {/*Enlazamos los formularios a los estados */}
            <form className="form-biograf" onSubmit={manejarActualizacionBio}>
                <div className="div-biograf">
                    <div className="titulo-biograf">
                        <div className="logo-biograf"></div>
                        <p>Biografía</p>
                    </div>
                    <textarea
                        className="textarea-biograf" 
                        rows="4" 
                        placeholder="Escribe lo que quieras sobre ti"
                        value={biografia} //Conectado al estado
                        onChange={(e) => setBiografia(e.target.value)} // Se actualiza al teclear
                        maxLength="255"
                    />
                </div>
                <button className="biograf-button" type="submit">Actualizar</button>
            </form>

            <form className="form-link" onSubmit={manejarActualizacionUrl}>
                <div className="form-link-div">
                    <div className="form-input-link">
                        <div className="logo-link"></div>
                        <p>Url</p>
                    </div>
                    <div className="input-link">
                        <input 
                            className="input-link" 
                            type="text" 
                            placeholder="Link a tu red social favorita" 
                            value={url} // Conectado al estado
                            onChange={(e) => setUrl(e.target.value)} //Se actualiza al teclear
                            maxLength="255"
                        />
                    </div>
                </div>
                <button className="link-button" type="submit">Actualizar</button>
            </form>

        </div>
    );
}

export default Perfil;