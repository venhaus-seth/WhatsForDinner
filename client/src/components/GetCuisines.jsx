import { useEffect, useState } from "react";
import axios from 'axios'
// import chance


const GetCuisines = () => {
    const [allCuisines, setAllCuisines] = useState([]);
    const [firstChoice, setFirstChoice] = useState("")
    const [secondChoice, setSecondChoice] = useState("")
    const [isStarted, setIsStarted] = useState(false)
    let chance = require('chance').Chance()

    //pulls all cuisines in array: AllCuisines
    useEffect(() => {
        axios.get("https://localhost:7157/api/Cuisines")
            .then(res => {
                const cuisineData = res.data
                setAllCuisines(cuisineData)})
            .catch(err => console.log(err))
        }, [])

    //use this useEffect for logic when updating state on first and second choices???
    // useEffect(() => {

    // }, [])

    //function for clicking the start button
    const initializeGame = () => {
        setFirstChoice(allCuisines[chance.integer({min: 0, max: (allCuisines.length - 1)})])
        console.log(firstChoice)
        setSecondChoice(allCuisines[chance.integer({min: 0, max: (allCuisines.length - 1)})]);
        console.log(secondChoice)
        deleteFirstChoice() 
        deleteSecondChoice()
        setIsStarted(true)
    }

    // functions after a choice is made
    const OnFirstChoiceClick = () => {
        // e.preventDefault()
        deleteSecondChoice()
        pullSecondChoice()
    }
    const OnSecondChoiceClick = () => {
        // e.preventDefault()
        deleteFirstChoice()
        pullFirstChoice()
    }

    // individual functions for pulling and deleting both choices
    const pullFirstChoice = () => {
        setFirstChoice(allCuisines[chance.integer({min: 0, max: (allCuisines.length - 1)})])
        console.log(firstChoice.name)
        while (firstChoice.name === secondChoice.name) {
            console.log("first and second are the same1")
            setFirstChoice(allCuisines[chance.integer({min: 0, max: (allCuisines.length - 1)})])
        }
    }
    const pullSecondChoice = () => {
        setSecondChoice(allCuisines[chance.integer({min: 0, max: (allCuisines.length - 1)})]);
        console.log(secondChoice.name)
        while (firstChoice.name === secondChoice.name) {
            console.log("first and second are the same2")
            setSecondChoice(allCuisines[chance.integer({min: 0, max: (allCuisines.length - 1)})])
        }
    }
    const deleteFirstChoice = () => {
        setAllCuisines(allCuisines.filter(cuisine => cuisine.name !== firstChoice.name))
    }
    const deleteSecondChoice =() => {
        setAllCuisines(allCuisines.filter(cuisine => cuisine.name !== secondChoice.name))
    }

    return(
        <div>
            
            {(() => {

                if (!isStarted) { 
                return <button onClick={initializeGame}>Start</button>
                } 

                else {
                return <div>
                        <h2>Would you rather have...</h2>
                        <div className="choicesContainer">
                        
                        <button className="choiceBox" onClick={OnFirstChoiceClick}>
                            <div className="choiceText">{firstChoice.name}</div>
                            <img className="cuisineImage" src={firstChoice.image} alt="Cuisine Image" />
                        </button>

                        <button className="choiceBox" onClick={OnSecondChoiceClick}>
                            <div className="choiceText">{secondChoice.name}</div>
                            <img className="cuisineImage" src={secondChoice.image} alt="Cuisine Image" />
                        </button>
                        
                    </div>
                </div> 
                }

            })()}

                {allCuisines.map((cuisine, i) => 
                <div key={i}>
                    <p> 
                        {cuisine.name}
                    </p>
                </div>
            )}  
            
        </div>
    )
}
export default GetCuisines