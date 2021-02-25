import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">¿Quiénes Somos?</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Empresas Asociadas</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Regístrate</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Log in</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Ayuda</a>
                </li>
             </ul>
            <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </div>
    )
}
