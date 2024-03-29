import { useState } from 'react';
import topArrow from '../../assets/topArrow.png'
import './dropdown.css'

function Dropdown({ title, text, equipments }) {
const [isOpen, setIsOpen] = useState(false);

    const basculerDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`containerDropdown ${isOpen ? 'open' : 'closed'}`}>
            <div className='containerDropdown__dropdown'>
                <h2 className='containerDropdown__dropdown--title'>{title}</h2>
                <img 
                src={topArrow} 
                alt="bouton pour ouvrir ou fermer la fenêtre" 
                className={`containerDropdown__dropdown--img ${isOpen ? 'rotate' : ''}`}
                onClick={basculerDropdown} 
                />
            </div>
            {text && <p className='containerDropdown__text content'>{text}</p>}
            {equipments && (
                <ul className='containerDropdown__equipments content'>
                    {equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown