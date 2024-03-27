import { useParams } from 'react-router-dom'
import listingsData from '../../datas/logements.json'
import Keywords from '../../components/keywords/Keywords.jsx';
import SlideShow from '../../components/slideShow/SlideShow.jsx'
import './listingDetails.css'

function ListingDetails() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.identifiant === id ); 
    return (
        <div className='listingDetails'>
            <SlideShow />
            <div className='headerContainer'>
                <h1 className='headerContainer__title'>{selectedListing["title"]}</h1>
                <p className='headerContainer__location'>{selectedListing["location"]}</p>
                <div className='headerContainer__keywords'>
                    <Keywords />
                </div>
                
            </div>          
        </div>
    );
}

export default ListingDetails