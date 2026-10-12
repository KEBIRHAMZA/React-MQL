let root = ReactDOM.createRoot(document.getElementById('root')); //  defini dans la biblio react-dom

// JSX :
function header() {
    let version = React.version;
    return (
        <h1 className="header">
            Chargement dynamique de contenu via React {version}
        </h1>
    )
} 

root.render(header());