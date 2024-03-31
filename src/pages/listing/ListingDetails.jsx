import { useParams } from 'react-router-dom'
import listingsData from '../../datas/logements.json'
import redStar from '../../assets/redStar.png'
import grayStar from '../../assets/grayStar.png'
import Keywords from '../../components/keywords/Keywords.jsx';
import SlideShow from '../../components/slideShow/SlideShow.jsx'
import Dropdown from '../../components/dropdown/Dropdown.jsx'
import './listingDetails.css'

function ListingDetails() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.identifiant === id ); 

    const renderStars = (note) => {
        const maxStars = 5;
        const stars = [];
        for (let i = 1; i <= maxStars; i++) {
            if (i <= note) {
                stars.push(<img key={i} src={redStar} alt="étoile rouge" className='noteContainer__stars' />);
            } else {
                stars.push(<img key={i} src={grayStar} alt="étoile grise" className='noteContainer__stars' />);
            }
        }
        return stars;
    };

    return (
        <main className='listingDetails'>
            <SlideShow />
            <section className='containerSection'>
                <div className='titleContainer'>
                    <h1 className='titleContainer__title'>{selectedListing["title"]}</h1>
                    <p className='titleContainer__location'>{selectedListing["location"]}</p>
                    <div className='titleContainer__keywords'>
                        <Keywords />
                    </div>       
                </div>
                <div className='hoteAndNoteContainer'>
                    <div className='hoteContainer'>
                        <p className='hoteContainer__name'>{selectedListing["hôte"]["nom"]}</p>
                        <img src={selectedListing["hôte"]["photo"]} 
                            alt="photo de l'hôte" 
                            className="hoteContainer__photo" 
                        />
                    </div>
                    <div className='noteContainer'>
                        {renderStars(parseInt(selectedListing.note))}
                    </div>
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