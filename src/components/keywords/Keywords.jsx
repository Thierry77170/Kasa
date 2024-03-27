import { useParams } from 'react-router-dom';
import listingsData from '../../datas/logements.json';
import './keywords.css';

function Keywords() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.identifiant === id );

    return (
        <div className='keywords-container'>
             {selectedListing["Mots clés"].map((keyword, index) => (
                <div key={index} className='keywords-container__keyword'>
                    <p className='keywords-container__keyword--text'>{keyword}</p>
                </div>
            ))}
        </div>
    );
}

export default Keywords