import { useParams } from 'react-router-dom';
import listingsData from '../../datas/logements.json';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import './slideShow.css';

function SlideShow() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.identifiant === id ); 
    const imagesSlide = selectedListing["des photos"];
    console.log(imagesSlide.length);

    return (
        <div className='slideShowContainer'>
            <img src={imagesSlide[0]}
                alt="image de couverture" 
                className='slideShowContainer__img' /
            >
            <div className='slideShowContainer__arrow'>
                <img src={leftArrow} alt="flèche gauche" className='slideShowContainer__arrow--left' />
                <img src={rightArrow} alt="flèche droite" className='slideShowContainer__arrow--right' />
            </div>

        </div>
    );
}

export default SlideShow