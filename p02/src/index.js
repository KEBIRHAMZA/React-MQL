import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App'; // separation entre le composant et ce fichier principale (root element/ racine)
import AuthorManager from './biblio/AuthorManager';
// import reportWebVitals from './reportWebVitals'; // 

const root = ReactDOM.createRoot(document.getElementById('root')); // c'est exactement ce qu'on a fait dans le projet precedent
root.render(
    // <App />
    <AuthorManager/>
);

// <React.StrictMode> declancher le script de mode strict de react : il mesur un certain nombre d'element 
// side effect
// verifie chaque composant contient une clee
// des gardes foux qui sont declanche

// reportWebVitals(key => console.log(key.name + ' : ' + key.value)); //  pour chaque mesure recuperer tu applique cette methode