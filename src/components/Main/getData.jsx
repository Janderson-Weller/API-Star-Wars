import { useEffect, useState } from "react";

const GetData = link => {
    
    const [dataObj, setData] = useState([]);

    useEffect(() => {

        fetch(link)
            .then(res => res.json())
            .then(r => {
                setData(r.results)
                // console.log(r.results)
            })
            .catch(erro => console.log(erro));
        }, []);
    
    return dataObj;
}

export default GetData;