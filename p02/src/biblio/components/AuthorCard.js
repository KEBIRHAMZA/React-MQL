export default function AuthorCard({ name, photo, yearBorn, country, technology }) {

    let path = 'images/authors/';

    return (
        <div className="card">
            <img src={`${path}${photo}`} alt={name} className="author-photo"/>
            <div>
                <span>{name}</span>
                <span>({yearBorn})</span>
            </div>
            <div>
                <span>{country}</span>
            </div>
            <div>
                <span>Technologies : </span>
                <span>{technology}</span>
            </div>
        </div>
    )
}