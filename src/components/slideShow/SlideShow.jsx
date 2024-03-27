import { useState } from 'react';
import { useParams } from 'react-router-dom';
import listingsData from '../../datas/logements.json';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import './slideShow.css';

function SlideShow() {
    const { id } = useParams(); 
    const selectedListing = listingsData.find(listing => listing.identifiant === id ); 
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentImageIndex((imageIndex) => (imageIndex + 1) % selectedListing["des photos"].length);
    }

    const prevSlide = () => {
        setCurrentImageIndex((imageIndex) => (imageIndex - 1 + selectedListing["des photos"].length) % selectedListing["des photos"].length);
    }

    return (
        <div className='slideShowContainer'>
            <img src={selectedListing["des photos"][currentImageIndex]}
                alt="image de couverture" 
                className='slideShowContainer__img' /
            >
            <div className="slideShowContainer__numbertext">{currentImageIndex + 1}/{selectedListing["des photos"].length}</div>
            <div className='slideShowContainer__arrow'>
                <img src={leftArrow} alt="flèche gauche" className='slideShowContainer__arrow--left' onClick={prevSlide} />
                <img src={rightArrow} alt="flèche droite" className='slideShowContainer__arrow--right' onClick={nextSlide} />
            </div>

        </div>
    );
}

export default SlideShow