import PreWipeCard from './assets/components/PrewipeCard'
import PreWipeCardPubli from './assets/components/PrewipeCardPubli'
import HeaderMain from './assets/components/HeaderMain'
import CatBar from './assets/components/CatBar'


function App() {
  return (
    <>
      <HeaderMain user="manolito" tokens={1} />
      <CatBar/>
      <PreWipeCard content="Compilando el servidor..." />
      <PreWipeCard content="Debuggeando el componente..." />
      <PreWipeCard content="Push a la rama main" />
      <PreWipeCardPubli name="Coca-Cola" content="Disfruta del nuevo sabor de nuestra Coca-Cola sabor paella!" marca="cocacola" url="https://www.coca-cola.com/es/es"  />
      <PreWipeCard content="Error 404: Café no encontrado" />
    </>
  )
}

export default App
