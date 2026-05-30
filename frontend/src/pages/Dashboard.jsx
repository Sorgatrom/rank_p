import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PreWipeCard from '../assets/components/PrewipeCard'
import PreWipeCardPubli from '../assets/components/PrewipeCardPubli'
import HeaderMain from '../assets/components/HeaderMain'
import CatBar from '../assets/components/minis/CatBar'
import { TokenProvisor } from '../assets/utils/TokenProvisor';
import {CategoriaProvisor} from '../assets/utils/CategoriasProvisor' //La emisora de radio!
import {TimerProvisor} from '../assets/utils/TimerProvisor'
import PostCard from '../assets/components/PostCard'


function Dashboard() {
  const navigate = useNavigate();

  // Dentro de tu componente Dashboard
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Si no hay token, patada al login
    }
  }, [navigate]);

  const cerrarSesion = () => {
    localStorage.removeItem('token'); // Borramos la llave
    navigate('/login');              // Volvemos al login
  };

  return (
    //La categoríaprovisor será la que podamos escuchar según que botón de las categorias esté pulsado tanto para postear como para ver contenido.
    //la hemos definido en minis (botones)
    <>
    <TimerProvisor>
      <TokenProvisor>
        <HeaderMain user="manolito"/>
        <CategoriaProvisor>
          <CatBar/>
          <PostCard/>
        </CategoriaProvisor>
      </TokenProvisor>
        <PreWipeCard content="Compilando el servidor..." />
        <PreWipeCard content="Debuggeando el componente..." />
        <PreWipeCard content="Push a la rama main" />
        <PreWipeCardPubli name="Coca-Cola" content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" marca="cocacola" url="https://www.coca-cola.com/es/es"  />
        <PreWipeCard content="Error 404: Café no encontrado" />
        <PreWipeCard content="Error 404: Café no encontrado" />
        <PreWipeCard content="Error 404: Café no encontrado" />
        <PreWipeCard content="Error 404: Café no encontrado" />
        <PreWipeCard content="Error 404: Café no encontrado" />
        <PreWipeCard content="Error 404: Café no encontrado" />
        <PreWipeCard content="Error 404: Café no encontrado" />
        <PreWipeCard content="Error 404: Café no encontrado" />
    </TimerProvisor>
    </>
  )
}

export default Dashboard;