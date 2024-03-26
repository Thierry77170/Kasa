import { NavLink } from "react-router-dom";
import listingsData from '../../datas/logements.json';
import './card.css'

function Card() {
    return (
        <div className='card-container'>
            {listingsData.map(listing => (
                <NavLink
                    key={listing.identifiant} 
                    to={`/listing/${listing.identifiant}`} 
                    className='card' 
                    activeClassName='active'
                >
                    <img src={listing.cover} alt="image de couverture" className="card__img" />
                    <h2 className="card__title">{listing.title}</h2>
                </NavLink>
            ))}
        </div>
    );
}

export default Card