import GetData from '../../Main/getData';
import '../../../App.css';
import '../../Main/GridCards/Card.css';

import GridCard from '../../Main/GridCards/Cards';

const Vehicles = () => {

    const data = GetData('https://swapi.dev/api/vehicles');

    return (
        <section className="vehicles">
            <ul className="grid-list">
                <GridCard data = {data} category = 'vehicles' />
            </ul>
        </section>
    );
}

export default Vehicles;