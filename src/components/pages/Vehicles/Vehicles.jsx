import GridCard from '../../Main/GridCards/Cards';
import GetData  from '../../Main/getData';
import Header   from '../../Header/Header';
import '../../Main/GridCards/Card.css';
import '../../../App.css';


const Vehicles = () => {

    const data = GetData('https://swapi.dev/api/vehicles');

    return (
        <>
            <Header />
            <section className="vehicles" style={{marginTop: '3rem'}}>
                <ul className="grid-list">
                    <GridCard data = {data} category = 'vehicles' />
                </ul>
            </section>
        </>
    );
}

export default Vehicles;