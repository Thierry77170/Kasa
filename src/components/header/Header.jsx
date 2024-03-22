import logoKasa from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div className='header'>
        <img src={logoKasa} alt='logo de Kasa' className='header__logo' />
        <nav className='header__nav'>
            <NavLink to='/home' className='header__nav--liens' activeClassName='active'>Accueil</NavLink> 
            <NavLink to='/about' className='header__nav--liens' activeClassName='active'>A Propos</NavLink>   
        </nav>
    </div>
    );
}

export default Header

