import GridCard from '../../Main/GridCards/Cards';
import GetData  from '../../Main/getData';
import Header   from '../../Header/Header';
import '../../Main/GridCards/Card.css';
import '../../../App.css';


const People = () => {

    const data = GetData('https://swapi.dev/api/people');

    return (
        <>
            <Header />
            <section className="people" style={{marginTop: '3rem'}}>
                <ul className="grid-list">
                    <GridCard data = {data} category = 'characters' />
                </ul>
            </section>
        </>
    );
}

export default People;