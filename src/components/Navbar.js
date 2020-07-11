import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
            <Link className="navbar-brand text-white" to="/">No sé que estoy haciendo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link text-white" activeClassName='text-secondary' to="create">Agregar Tarea<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white" activeClassName='text-secondary' to="about">Sobre el proyecto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;