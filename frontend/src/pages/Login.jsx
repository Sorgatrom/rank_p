import Logincardxcontent from '../assets/components/Logincardxcontent'
import PreWipeCardPubli from '../assets/components/PrewipeCardPubli'
import Headerinv from '../assets/components/Headerinv'
import CatBar from '../assets/components/minis/CatBar'
import Logincardx from '../assets/components/Logincardx'
import {CategoriaProvisor} from '../assets/components/minis/CategoriasProvisor' //La emisora de radio!

function Login() {
  //
  return (
    <>
    <CategoriaProvisor>
        <Headerinv/>
        <CatBar/>
        <Logincardxcontent content="Compilando el servidor..." />
        <Logincardxcontent content="Debuggeando el componente..." />
        <PreWipeCardPubli name="Coca-Cola" content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" marca="cocacola" url="https://www.coca-cola.com/es/es"  />
        <Logincardxcontent content="Error 404: Café no encontrado" />
        <Logincardx></Logincardx>
      </CategoriaProvisor>
    </>
  )
}

export default Login;