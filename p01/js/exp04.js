let root = ReactDOM.createRoot(document.getElementById('root')); //  defini dans la biblio react-dom

// JSX :
function Header() { // Functional Component (Web Component)
    let version = React.version;
    return (
        <h1 className="header">
            Chargement dynamique de contenu via React V: {version}
        </h1>
    )
} 

root.render(
    <Header/>
);