import { useParams } from 'react-router-dom';
import listingsData from '../../datas/logements.json';
import SlideShow from '../../components/slideShow/SlideShow.jsx';
import './listingDetails.css'

function ListingDetails() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.identifiant === id ); 

    return (
        <div className='listingDetails'>
            <SlideShow />
        </div>
    );
}

export default ListingDetails