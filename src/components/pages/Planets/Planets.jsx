import GetData from '../../Main/getData';
import '../../../App.css';
import '../../Main/GridCards/Card.css';

import GridCard from '../../Main/GridCards/Cards';

const Planets = () => {

    const data = GetData('https://swapi.dev/api/planets');

    return (
        <section className="planets">
            <ul className="grid-list">
                <GridCard data = {data} category = 'planets' />
            </ul>
        </section>
    );
}

export default Planets;