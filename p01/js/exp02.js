let root = ReactDOM.createRoot(document.getElementById('root')); //  defini dans la biblio react-dom

let version = React.version;
// JSX :
let header = <h1 className="header">Chargement dynamique de contenu {version}</h1>

console.log(header);

root.render(header);