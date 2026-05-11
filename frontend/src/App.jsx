import { useState } from 'react'
import PreWipeCard from './assets/components/PrewipeCard'
import HeaderMain from './assets/components/HeaderMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderMain user="manolito" tokens={1} />
      <PreWipeCard number={1} content="Compilando el servidor..." />
      <PreWipeCard number={2} content="Debuggeando el componente..." />
      <PreWipeCard number={3} content="Push a la rama main" />
      <PreWipeCard number={5} content="Error 404: Café no encontrado" />
    </>
  )
}

export default App
