let root = ReactDOM.createRoot(document.getElementById('root')); //  defini dans la biblio react-dom

let version = React.version;
// JSX : JavaScript XML : c'est une syntaxe qui permet de melanger du code html et du code javascript
root.render(
    <h1 className="header">
        Chargement dynamique de contenu {version}
    </h1>
)