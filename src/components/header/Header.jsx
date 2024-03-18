import logoKasa from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div className='header'>
        <img src={logoKasa} alt='header__logo' />
        <nav className='header__nav'>
            <NavLink to='/' className='header__nav--liens' activeClassName='active'>Accueil</NavLink> 
            <NavLink to='/aPropos' className='header__nav--liens' activeClassName='active'>A Propos</NavLink>   
        </nav>
    </div>
    );
}

export default Header

