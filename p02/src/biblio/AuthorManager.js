import AuthorsList from "./components/AuthorsList";
import './css/AuthorManager.css';

export default function AuthorManager() {

    return(
        <div className="author-manager">
            <AuthorsList/>
        </div>
    )
}