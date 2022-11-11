import GetData from '../../Main/getData';
import '../../../App.css';
import '../../Main/GridCards/Card.css';

import GridCard from '../../Main/GridCards/Cards';

const Species = () => {

    const data = GetData('https://swapi.dev/api/species');

    return (
        <section className="species">
            <ul className="grid-list">
                <GridCard data = {data} category = 'species' />
            </ul>
        </section>
    );
}

export default Species;