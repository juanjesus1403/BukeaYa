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
          <Header/>
          <Navbar/>
  
  <main>
    <div className="container-fluid text-center tarjetas  ">
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
