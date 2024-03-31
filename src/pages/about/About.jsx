import MaskGroup from '../../components/maskGroup/MaskGroup.jsx'
import Dropdown from '../../components/dropdown/Dropdown.jsx'
import './about.css'

function About() {
    return (
        <main className='about'>
            <section>
                <MaskGroup viewType="about"/>
            </section>
            <section className="dropdownContainer">
                <Dropdown 
                    className="dropdownContainer__dropdown"
                    title="Fiabilité" 
                    text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements, 
                        et toutes les informations sont régulièrement vérifiées par nos équipes." 
                />
                <Dropdown 
                    className="dropdownContainer__dropdown"
                    title="Respect" 
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage 
                    entraînera une exclusion de notre plateforme." 
                />
                <Dropdown 
                    className="dropdownContainer__dropdown"
                    title="Service" 
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage 
                    entraînera une exclusion de notre plateforme." 
                />
                <Dropdown 
                    className="dropdownContainer__dropdown"
                    title="Sécurité" 
                    text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                    chaque logement correspond aux critères de sécurité établis par nos services.
                    En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
                    que les standars sont bien respectés. 
                    Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." 
                />
            </section>
        </main>
    );
}

export default About;