// import AuthorsList from "./components/AuthorsList";
import SearchAuthors from "./components/SearchAuthors";
import './css/AuthorManager.css';

export default function AuthorManager() {

    return(
        <div className="author-manager">
            {/* <AuthorsList/> */}
            <SearchAuthors/>
        </div>
    )
}