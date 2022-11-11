import { Link } from "react-router-dom";


const ListItems = ({ arrayList })=> {

    const listItem = arrayList.map((item) => (

        <li key = {item.toString()}>
            <Link to={`/${item.toLowerCase()}`} target="_self" rel="noopener noreferrer" >{item}</Link>
        </li>
    ))
    
    return (
        <> 
            {listItem}
        </>
    )
}

export default ListItems;