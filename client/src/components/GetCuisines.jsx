import { useEffect, useState } from "react";
import axios, { all } from 'axios'
// import chance


const GetCuisines = () => {
    const [allCuisines, SetAllCuisines] = useState([]);
    const [firstChoice, setFirstChoice] = useState("")
    const [secondChoice, setSecondChoice] = useState("")
    let chance = require('chance').Chance()

    useEffect(() => {
        axios.get("https://localhost:7157/api/Cuisines")
            .then(res => {
                const cuisineData = res.data
                SetAllCuisines(cuisineData)})
            // .then(console.log(allCuisines))
            .catch(err => console.log(err))
        }, [])


    const initializeGame = () => {
        console.log(allCuisines)
        console.log(firstChoice)
        pullAndDeleteFirstChoice()
        console.log(firstChoice)
        console.log(allCuisines)
        pullAndDeleteSecondChoice()
        console.log(allCuisines)
        console.log("***")
    }

    const pullAndDeleteFirstChoice = () => {
        setFirstChoice(allCuisines[chance.integer({min: 0, max: (allCuisines.length - 1)})])
        SetAllCuisines(allCuisines.filter(cuisine => cuisine.name !== firstChoice.name))
    }

    const pullAndDeleteSecondChoice = () => {
        setSecondChoice(allCuisines[chance.integer({min: 0, max: (allCuisines.length - 1)})]);
        SetAllCuisines(allCuisines.filter(cuisine => cuisine.name !== secondChoice.name))
    }

    return(
        <div>
            <h2>Would you rather have...</h2>
            <button onClick={initializeGame}>Start

            </button>
        
                {// allCuisines.map((cuisine, i) => 
                // <div key={i}>
                //     <p> 
                //         {cuisine.name}
                //     </p>
                // </div>
                // )S
                }
                <div>
                    <div>
                        {firstChoice.name}
                    </div>
                    <div>
                        {secondChoice.name}
                    </div>
                </div>
                
            
        </div>
    )
}
export default GetCuisines