import MaskGroup from '../../components/maskGroup/MaskGroup.jsx'
import Card from '../../components/card/Card.jsx'
import './home.css'

function Home() {
    return (
        <main className='home'>
            <MaskGroup viewType="home"/>
            <Card />
        </main>
    );
}

export default Home;