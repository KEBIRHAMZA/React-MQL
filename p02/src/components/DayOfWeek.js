import { useState } from "react";

const DAYS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export default function DayOfWeek(){ 
    let [day,setDay] = useState(3) // destructuring de tableau. day est l'etat et setDay est le setter de cet etat. 3 est la valeur initiale de l'etat.

    /**
     * Une variable d'etat ou simplement un etat est une variable dont depend l'affichage ou l'accomplissement (ou encore rendering)
     * du composant. Ainsi, tout changement de la valeur de cet etat devarait se faire en avisant React. ce dernier se chargera
     * alors de reafficher ou repeindre de composant avec son nouvel etat (re-rendering)
     * Pour cela, le composant devra etre connecter ou accroche a React.
     * On utilisera ainsi un crochet ou plus exactement un "HOOK".
     * Un Hook serait alors une fonction React permettant a un composant Fonctionnel de rester connecte a React. Le Hook dont on a 
     * besoin dans cette exemple s'appelle "useState()". Il recoit en parametre la valeur initiale de l'etat et retourne un tableau de deux elements :
     * l'etat et le setter de cet etat et qui sera le seul moyen permettant de changer la valeur de l'etat.
     * 
     */

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