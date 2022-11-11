import GridCard from '../../Main/GridCards/Cards';
import GetData  from '../../Main/getData';
import Header   from '../../Header/Header';
import '../../Main/GridCards/Card.css';
import '../../../App.css';


const Species = () => {

    const data = GetData('https://swapi.dev/api/species');

    return (
        <>
            <Header />
            <section className="species" style={{marginTop: '3rem'}}>
                <ul className="grid-list">
                    <GridCard data = {data} category = 'species' />
                </ul>
            </section>
        </>
    );
}

export default Species;