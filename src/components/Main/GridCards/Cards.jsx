const GridCard = ({data, category}) => {
    
    let key = 1;
    
    return (
        <>
            {data.map(item =>
                <li key={key += 1}>
                    <div className="card">
                        <div className="container-img">
                            <img src={`https://starwars-visualguide.com/assets/img/${category}/${key}.jpg`} alt="" />
                        </div>
                        <span className='legend-card'>{item.name}</span>
                    </div>
                </li>
            )}
        </>
    );
}

export default GridCard;