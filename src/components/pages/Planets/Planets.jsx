import GridCard from '../../Main/GridCards/Cards';
import GetData  from '../../Main/getData';
import Header   from '../../Header/Header';
import '../../Main/GridCards/Card.css';
import '../../../App.css';


const Planets = () => {

    const data = GetData('https://swapi.dev/api/planets');

    return (
        <>
            <Header />
            <section className="planets" style={{marginTop: '3rem'}}>
                <ul className="grid-list">
                    <GridCard data = {data} category = 'planets' />
                </ul>
            </section>
        </>
    );
}

export default Planets;