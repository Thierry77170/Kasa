import { useParams } from 'react-router-dom'
import listingsData from '../../datas/logements.json'
import Keywords from '../../components/keywords/Keywords.jsx';
import SlideShow from '../../components/slideShow/SlideShow.jsx'
import Dropdown from '../../components/dropdown/Dropdown.jsx'
import './listingDetails.css'

function ListingDetails() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.identifiant === id ); 

    return (
        <main className='listingDetails'>
            <SlideShow />
            <section>
                <div className='titleContainer'>
                    <h1 className='titleContainer__title'>{selectedListing["title"]}</h1>
                    <p className='titleContainer__location'>{selectedListing["location"]}</p>
                    <div className='titleContainer__keywords'>
                        <Keywords />
                    </div>       
                </div>
                <div className='nameContainer'>

                </div>
            </section>
            
            
            <section className='containerDescription'>
                <Dropdown title="Description" text={selectedListing.description} />
                <Dropdown title="Équipements" equipments={selectedListing["équipements"]} />
            </section>                 
        </main>
    );
}

export default ListingDetails