// 2 solution natives pour le generation dynamique du contenu

let root = document.getElementById("root");

// Solution 1 : Simple et lisible

// inconveniant : lors que ca devient complexe, ca devient vite illisible
// on est entrain de deposer dans innerHtml un chaine de caractere qui doit etre parse, plus c'est complexe, plus ca devient lent
// on est entraint de travailer directement en dom : a l'interieur d'une boucle cela devient trs lourd

// ----------------------------------------
// let version = "1.1";
// root.innerHTML = `
//     <h1 class="header">
//         Chargement dynamique de contenu ${version}
//     </h1>
// `
// ----------------------------------------

// Solution 2

// l'inconveniant est que l'on est entrain de cree l'arbre dom noeud par noeud
// l'avantage est que cela necessite pas de parser une chaine de caractere, on est entrain de travailler directement en dom

let h1 = document.createElement('h1');
let version = "1.1";
h1.textContent = `Chargement dynamique de contenu (Solution 2) ${version}`;
// h1.classList.add('header');
h1.className = 'header';
root.appendChild(h1);
