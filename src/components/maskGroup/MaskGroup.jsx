import imgHome from '../../assets/imgHome.png'
import imgAbout from '../../assets/imgAbout.png'
import './maskGroup.css'

function MaskGroup({ viewType }) {
    
    {/* On détermine quelle image charger en fonction de la vue*/}
    const getImage = () => {
        if (viewType === 'home') {
            return imgHome;
        } else if (viewType === 'about') {
            return imgAbout;
        }
    } 

    return (
        <div className='maskGroup'>
            <img src={getImage()} alt='paysage' className='maskGroup__img' />
            {viewType === 'home' && <p className='maskGroup__text'>Chez vous, partout et ailleurs</p>}
        </div>
    );
}

export default MaskGroup