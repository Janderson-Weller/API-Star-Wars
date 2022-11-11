import GetData from '../../Main/getData';
import '../../../App.css';
import '../../Main/GridCards/Card.css';

import GridCard from '../../Main/GridCards/Cards';

const People = () => {

    const data = GetData('https://swapi.dev/api/people');

    return (
        <section className="people">
            <ul className="grid-list">
                <GridCard data = {data} category = 'characters' />
            </ul>
        </section>
    );
}

export default People;