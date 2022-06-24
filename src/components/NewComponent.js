import React, {useState, useEffect, useCallback, useMemo} from "react";


function NewComponent() {

    const [Apidata, setApidata] = useState([]);
    const getApiData = async () => {
            /* fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => res.json())
            .then((result)=> setApidata(result)); */
        const reponseData = await fetch('https://jsonplaceholder.typicode.com/photos')
        setApidata(await reponseData.json())
    };
    useEffect(() => {
        //console.log('use effect called', Apidata);
            getApiData()   
    }, []);
    return ( 
        <div>
            <ul>
                {
                    Apidata.map((listitem) => {
                        return <li key={listitem.id}>{listitem.title}</li>
                    })
                }
            </ul>
        </div>
     );
}

export default NewComponent;