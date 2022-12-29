import { useState } from 'react'

import './Components/Navbarr'
import Navbar from './Components/Navbarr'
import './Components/ItemListContainer'
import ItemListContainer from './Components/ItemListContainer'
import './Components/logo'
import Logo from './Components/logo'

//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      <Navbar/>

      <Logo/>

      <ItemListContainer mensaje='nueva pagina'/>

    </div>
  )
}

export default App
