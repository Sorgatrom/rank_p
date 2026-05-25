import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PreWipeCard from '../assets/components/PrewipeCard'
import PreWipeCardPubli from '../assets/components/PrewipeCardPubli'
import HeaderMain from '../assets/components/HeaderMain'
import CatBar from '../assets/components/CatBar'
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
    <>
      <HeaderMain user="manolito" tokens={1} />
      <CatBar/>
      <PostCard/>
      <PreWipeCard content="Compilando el servidor..." />
      <PreWipeCard content="Debuggeando el componente..." />
      <PreWipeCard content="Push a la rama main" />
      <PreWipeCardPubli name="Coca-Cola" content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" marca="cocacola" url="https://www.coca-cola.com/es/es"  />
      <PreWipeCard content="Error 404: Café no encontrado" />
    </>
  )
}

export default Dashboard;