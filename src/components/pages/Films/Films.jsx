import GetData from '../../Main/getData';
import CardFilms from './CardsFilms';
import '../../../App.css';

const Films = () => {

    const data = GetData('https://swapi.dev/api/films');
    
    return (
        <section className="films">
            <ul className="grid-list">
                <CardFilms data={data} category='films'/>
            </ul>
        </section>
    );
}

export default Films;