import { useState } from 'react'
import './App.css'
import NavBar from './assets/Components/NavBar/NavBar'
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="BIENVENIDOS A LA TIENDA ONLINE DE EMPILCHADOS"/>
    </>
  )
}

export default App
