import { useEffect, useState } from "react";

export default function Timer() {

    let [time,setTime] = useState(getTime());

    console.log("Rendering Timer Component");

    /**
     * 
     * UseEffect() est un autre Hook utilise a chaque fois qu'un composant dispose d'un block d'instructions
     * qui devrait etre execute une seule fois lors du premier redering du composant; et si execute a chaque 
     * rerendering on pourait avoir un effet secondaire, effet de bord ou encore (side effect). Pour empecher 
     * ce side effect on devra preciser a React le code a executer une seule fois lors du premier rendering 
     * communique comme premier parametre du Hook useEffect().
     * 
     * useEffect() dispose d'un second parametre a travers duquel on pourra preciser dans un tableau les dependances de l'effet,
     * ou encore les variables dont le changement de valeur devra declancher la reexecution de l'effet une nouvelle fois.
     * s'il n'y a pas de dependance, le parametre devra tout de meme etre communique sous forme d'un tableau vide 
     * (le cas de notre exemple).
     * 
     */

    function getTime(){
        let now = new Date();
        return {
            hour: now.getHours(),
            minute: now.getMinutes(),
            second: now.getSeconds()
        }
    }

    /**
    
    Side effect 

    setInterval(() => {
        setTime(getTime());
    }, 1000);
     
    */
    
    useEffect(() => {
        setInterval(() => {
            setTime(getTime());
        }, 1000);
    },[]); // explicitement mon effet n'a pas de dependance.

    // le tableau contiendra les dependance de l'effet (est obligatoire), les variables dont depend l'effet. Si le tableau est vide, 
    // l'effet ne sera declanche qu'une seule fois apres le premier rendu du composant.

    return (
        <div className="timer">
            <span>{time.hour} : {time.minute} :{time.second}</span>
        </div>
    )
}