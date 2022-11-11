import '../../Main/GridCards/Card.css'


const CardFilms = ({data, category}) => {
    
    data.sort((a, b) => {return a.episode_id - b.episode_id})
    
    return (
        <>
            {data.map(item =>
                <li key={item.episode_id}>
                    <div className="card">
                        <div className="container-img">
                            <img src={`https://starwars-visualguide.com/assets/img/${category}/${item.url[item.url.length-2]}.jpg`} alt="" />
                        </div>
                        <span className='legend-card'>{item.episode_id}: {item.title}</span>
                    </div>
                </li>
            )}
        </>
    );
}

export default CardFilms;