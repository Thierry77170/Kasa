import { Link } from "react-router-dom";
import listingsData from '../../datas/logements.json';
import './card.css'

function Card() {
    return (
        <section className='card-container'>
            {listingsData.map(listing => (
                <Link
                    key={listing.identifiant} 
                    to={`/listing/${listing.identifiant}`} 
                    className='card' 
                >
                    <img src={listing.cover} alt="image de couverture" className="card__img" />
                    <h2 className="card__title">{listing.title}</h2>
                </Link>
            ))}
        </section>
    );
}

export default Card