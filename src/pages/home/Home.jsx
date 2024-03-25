import MaskGroup from '../../components/maskGroup/MaskGroup.jsx'
import Card from '../../components/card/Card.jsx'
import './home.css'

function Home() {
    return (
        <div className='home'>
            <MaskGroup viewType="home"/>
            <Card />
        </div>
    );
}

export default Home;