
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Perfil from './pages/Perfil.jsx'
import BotonUp from './assets/utils/BotonUp.jsx'; //Botón de subir!


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas para el login*/}
        <Route path="/login" element={<Login/>}/>

        {/*Rutas para el dashboard princiapl*/}
        <Route path="/dashboard" element={<Dashboard/>}/>

        {/*Esta es la ruta por DEFECTOO*/}
        <Route path="/" element={<Navigate to="/login"/>}/>

        {/*Ruta del perfil*/}
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <BotonUp />
    </BrowserRouter>
  )
}

export default App
