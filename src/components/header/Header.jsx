import React from 'react'
import logoKasa from '../../assets/logo.png'
import './header.css'

function Header() {
    return <div className='header'>
        <img src={logoKasa} alt='header__logo' />
        <nav className='header__nav'>
            <a href='' className='header__nav--liens'>Accueil</a> 
            <a href='' className='header__nav--liens'>A Propos</a>   
        </nav>
    </div>
}

export default Header

