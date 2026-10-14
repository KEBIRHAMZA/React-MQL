export default function Header(props){
    return (
        <header className="header">
            <h1>
                <img src="/icons/favicon.ico" alt="React Icon"/>
                <span>{props.title}</span>
            </h1>
            <h2>Application Version : {props.version}</h2>
        </header>
    )
}