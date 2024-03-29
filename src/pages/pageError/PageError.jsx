import './pageError.css'
import { NavLink } from 'react-router-dom'

function PageError() {
    return (
    <main className='container'>
        <h1 className='container__title'>404</h1>
        <p className='container__text'>{"Oups! La page que vous demandez n'existe pas."}</p>
        <NavLink to='/home' className='container__lien' activeClassName='active'>{"Retourner sur la page d'accueil"}</NavLink> 
    </main>
    );
}

export default PageError