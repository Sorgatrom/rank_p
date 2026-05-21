import './headerinv.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//MANEJAMOS EL ACCESO EN LA CABECERA!

function Headerinv({}) {
    //Configuramos los estados para guardar lo que el usuario escribe
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //Creamos una variable para pintar el loggin si fallamos
    const [errorcss, setErrorcss] = useState('');

    const navigate = useNavigate(); //Herramienta para redirigir la pag.

    const manejarSubmit = async (e) => {
        e.preventDefault(); //Evitar que se recargue la pag al enviar formulario.
        try{
            //Usamos un try por si el serv no responde
            //hacemos la llamada a la API de Laravel
            const respuesta = await fetch('http://127.0.0.1:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            const datos = await respuesta.json();

            if (respuesta.ok) {
                //Si éxito, guardamos el token de Sanctum en la "memoria" del navegador
                localStorage.setItem('token', datos.token);

                //Redirigimos al dashboard
                navigate('/dashboard');
            } else {
                //sino, mostramos el error
                setErrorcss('-red');
                setError(datos.mensaje || 'Error al iniciar sesión');
            }
        } catch (err) {
            setError('Error de conexión con el servidor');
        }
    };

    return (
        <>
            <div className="headerinv-main">
                <div className="headerinv-main-logo" src="./resources/Iconos/logo ppal svg.svg"/>
                <div className={"headerinv-main-info" + errorcss}>
                    <div>
                        <form className='headerinv-main-form' onSubmit={manejarSubmit}>
                            <input
                                className='headerinv-main-input1'
                                type='email'
                                value={email} //IMPORTANTE EN REACT para vincular
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email'
                                aria-label='Correo de Usuario'
                            />
                            <input
                                className='headerinv-main-input2'
                                type='password'
                                value={password} //IMPORTANTE EN REACT para vincular
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Password'
                                aria-label='Constraseña de Usuario'
                            />
                            <button className="headerinv-main-button" type='submit'>Go</button>
                        </form>
                    </div>
                </div>  
            </div>
        </>
    )};

    export default Headerinv;