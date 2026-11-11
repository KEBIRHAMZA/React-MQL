import { useEffect, useState } from "react";
import getAllAuthors from "../services/author.service";
import AuthorCard from "./AuthorCard";

export default function SearchAuthors() {
    let [authors,setAuthors] = useState([]);
    let [keyword,setKeyword] = useState({name : '', techno:''});
    
    useEffect(() => {
    
        getAllAuthors()
        .then(data => setAuthors(data));
    
    },[])
    
    let result = authors.filter(a => {
        return a.name.toLowerCase().includes(keyword.name) && 
               a.technology.toLowerCase().includes(keyword.techno);
    })

    let list = result.map((author) => <AuthorCard key={author.id} {...author} />) // une pratique ES6 qu'on peut utiliser

    function changeHandler(event){

        let inputName = event.target.name;
        let inputValue = event.target.value.toLowerCase();

        console.log(inputName + " : " + inputValue);

        setKeyword(kw => ({...kw, [inputName]: inputValue}));

    }
    
    return (
        <div className="search-authors">
            <h1>Recherche d'auteurs</h1>
            <fieldset>
                <legend>Donnees Recherchees : </legend>
                <div>
                    <label htmlFor="name">Nom de l'auteur : </label>
                    <input type="text" size={25} id="name" name="name" 
                    onChange={changeHandler}/>
                </div>
                <div>
                    <label htmlFor="techno">Technologie : </label>
                    <input type="text" size={25} id="techno" name="techno" 
                    onChange={changeHandler}/>
                </div>
            </fieldset>
        <div className="authors-list">
            {list}
        </div>
        </div>
    )
}