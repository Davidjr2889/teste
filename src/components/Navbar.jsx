import React from 'react'
import '../assets/style/navbar.css'
import {Route, BrowserRouter} from 'react-router-dom'
import AppRoutes from '../routes'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='topmenu'>
            <ul className='links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li><Link to="/livros">Livros</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li>
                <Link to='/sobre'>Sobre nós</Link>
                </li>
            </ul>

        </nav>
    )
};

export default Navbar;