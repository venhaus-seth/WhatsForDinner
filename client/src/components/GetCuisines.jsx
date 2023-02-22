import { useEffect, useState } from "react";
import axios from 'axios'
// import NavBar from './NavBar';


const GetCuisines = () => {
    const [allCuisines, SetAllCuisines] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7157/api/Cuisines')
        .then(res => SetAllCuisines(res.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h2>Cuisines</h2>
            {
                allCuisines.map((cuisine, i) => 
                <div key={i}>
                    <p> 
                        {cuisine.name}
                    </p>
                </div>
                )
            }
        </div>
    )
}
export default GetCuisines