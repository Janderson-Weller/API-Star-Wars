import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ListItems = ({ arrayList })=> {

    // const [choice, setChoice] = useState();
    
    // useEffect(() => {
    //     document.querySelector('.span-t').textContent = choice 
    // });

    const listItem = arrayList.map((item) => (
        <li key = {item.toString()}>
            <Link to={item.toLowerCase()} target="_self" rel="noopener noreferrer" >{item}</Link>
        </li>
        )
    )
    
    return (
        <> 
            {listItem}
        </>
    )
}

export default ListItems;