import React from 'react'

import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Formulario from './components/Formulario/Formulario'
import Help from './components/Help/Help'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import "./components/Header/Header.css"
import "./components/Navbar/Navbar.css"
import "./components/Cards/Cards.css"
import "./components/Formulario/Formulario.css"



export default function App() {
  return (
    <div>
      <header>
    <div className="container-fluid text-center cabecera my-2">
      <div className="row">
        <div className="col-xl-12" >
          <Header/>
        </div>
      </div>
    </div>
    
  </header>
    <nav> 
      <div className= "container-fluid text-center barra my-2">
        <div className="row">
          <div className="col-12">
            <Navbar/>
          </div>
        </div>
      </div>
    </nav>

  <main>
    <div className="container-fluid text-center tarjetas my-2 ">
      <div className="row">
        <div className="col-12" >
          <Cards/>
        </div>
      </div>
    </div>

    <div className="container-fluid text-center registro my-2">
      <div className="row">
        <div className="col-12">
          <Formulario/>
        </div>
      </div>
    </div>

  </main>
      
    </div>
  )
}
