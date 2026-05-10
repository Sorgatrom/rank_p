import { useState } from 'react'
import PreWipeCard from './assets/components/prewipeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PreWipeCard number={1} content="Hola! soy el primer post" ></PreWipeCard>
      <PreWipeCard number={2} content="Hola! soy el primer post" ></PreWipeCard>
    </>
  )
}

export default App
