import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PreWipeCard from '@/assets/components/prewipeCard.jsx'
import PreWipeCardPubli from '@/assets/components/PrewipeCardPubli.jsx'
import HeaderMain from '@/assets/components/HeaderMain.jsx'
import CatBar from '@/assets/components/barra_categorias/CatBar.jsx'
import { TokenProvisor } from '@/assets/utils/TokenProvisor.jsx';
import {CategoriaProvisor} from '@/assets/utils/CategoriasProvisor.jsx' //La emisora de radio!
import PostCard from '@/assets/components/PostCard.jsx'
import { TimerProvisor } from '@/assets/utils/TimerProvisor.jsx';
import { MuroSwitcher } from '@/assets/utils/MuroSwitcher.jsx';


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
    //la hemos definido en barra_categorias
    <>
      <TimerProvisor>
        <TokenProvisor>
          <HeaderMain/>
          <CategoriaProvisor>
            <CatBar/>
            <PostCard/>
            <MuroSwitcher/>
          </CategoriaProvisor>
        </TokenProvisor>
      </TimerProvisor>
    </>
  )
}

export default Dashboard;