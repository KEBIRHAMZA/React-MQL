import { useState } from "react";

const DAYS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export default function DayOfWeek(){ 
    let [day,setDay] = useState(3)

    console.log("DayOfWeek Rendering...")

    function handleClick(){
        // setDay(day+1)
        setDay(ps => ps < 6 ? ps+1 : 0) // l'operateur ternaire
        console.log(day);
    }

    return(
        <div className="day-of-week">
            <span>Jour de la semaine : </span>
            <span>{DAYS[day]}</span>
            <button onClick={handleClick}>Suivant</button> 
        </div>
    )
}