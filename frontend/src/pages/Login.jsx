import Logincardxcontent from '../assets/components/Logincardxcontent'
import PreWipeCard from '../assets/components/PrewipeCard'
import PreWipeCardPubli from '../assets/components/PrewipeCardPubli'
import Headerinv from '../assets/components/Headerinv'
import CatBar from '../assets/components/CatBar'
import Logincardx from '../assets/components/Logincardx'

function Login() {
  return (
    <>
      <Headerinv/>
      <CatBar/>
      <Logincardxcontent content="Compilando el servidor..." />
      <Logincardxcontent content="Debuggeando el componente..." />
      <PreWipeCardPubli name="Coca-Cola" content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" marca="cocacola" url="https://www.coca-cola.com/es/es"  />
      <Logincardxcontent content="Error 404: Café no encontrado" />
      <Logincardx></Logincardx>
    </>
  )
}

export default Login;