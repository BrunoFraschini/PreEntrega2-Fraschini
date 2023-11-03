import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import "./components/NavBar/NavBar.css"
import "./components/CartWidget/CartWidget.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  const [count, setCount] = useState(0)
  const TituloApp = "MUSIC CITY"
  const BienvenidaApp = "Bienvenido a Music city, la mejor tienda online de musica del pais."
  return (
    <BrowserRouter>
    <>
      <NavBar/>
      <Routes>
       <Route path='/' element={<ItemListContainer greeting='Bienvenido a MusicCity, la mejor tienda de musica del pais.'/>}/> 

      <Route path='/Item/:pid' element={<ItemDetailContainer/>}/>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
