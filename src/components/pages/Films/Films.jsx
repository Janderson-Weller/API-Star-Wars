import CardFilms from './CardsFilms';
import GetData   from '../../Main/getData';
import Header    from '../../Header/Header';
import '../../Main/Main.css';
import '../../../App.css';


const Films = () => {

    const data = GetData('https://swapi.dev/api/films');
    
    return (
        <>
            <Header />
            <section className="films" style={{marginTop: '3rem'}}>
                <ul className="grid-list">
                    <CardFilms data={data} category='films'/>
                </ul>
            </section>
        </>
    );
}

export default Films;