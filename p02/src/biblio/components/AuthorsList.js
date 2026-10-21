import { useEffect, useState } from "react"
import getAllAuthors from "../services/author.service";
import AuthorCard from "./AuthorCard";


export default function AuthorsList(){
    
    let [authors,setAuthors] = useState([]);

    useEffect(() => {

        getAllAuthors()
        .then(data => setAuthors(data));

    },[])

    let list = authors.map((author) => <AuthorCard key={author.id} {...author} />) // une pratique ES6 qu'on peut utiliser

    return (
        <div className="authors-list">
            {list}
        </div>
    )
}