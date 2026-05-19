import PreWipeCard from './assets/components/PrewipeCard'
import HeaderMain from './assets/components/HeaderMain'

function App() {
  return (
    <>
      <HeaderMain user="manolito" tokens={1} />
      <PreWipeCard content="Compilando el servidor..." />
      <PreWipeCard content="Debuggeando el componente..." />
      <PreWipeCard content="Push a la rama main" />
      <PreWipeCard content="Error 404: Café no encontrado" />
    </>
  )
}

export default App
