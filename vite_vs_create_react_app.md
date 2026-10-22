# Résumé : Vite vs Create React App (CRA)

## 1. Introduction

**Create React App (CRA)** et **Vite** sont des outils qui permettent de
démarrer un projet React sans configurer manuellement tout
l'environnement.

CRA a longtemps été une solution populaire pour créer des applications
React. Cependant, son fonctionnement basé sur Webpack peut rendre le
démarrage et les mises à jour plus lents, notamment dans les grands
projets.

**Vite** est un outil de développement moderne qui privilégie la
rapidité et une configuration simple. Il est aujourd'hui souvent
recommandé pour créer de nouveaux projets front-end.

## 2. Les principales fonctionnalités de Vite

-   **Démarrage rapide :** le serveur de développement démarre
    généralement rapidement.
-   **Hot Module Replacement (HMR) :** les changements de code sont
    appliqués dans le navigateur sans recharger toute la page dans de
    nombreux cas.
-   **Modules ES natifs :** pendant le développement, Vite s'appuie sur
    les modules JavaScript natifs du navigateur au lieu de regrouper
    immédiatement toute l'application.
-   **Build de production optimisé :** Vite utilise Rollup pour produire
    les fichiers destinés à la production. Le tree-shaking permet de
    retirer une partie du code inutilisé.
-   **Prise en charge de plusieurs frameworks :** Vite peut servir de
    base à des projets React, Vue, Svelte et d'autres outils
    compatibles.
-   **JavaScript et TypeScript :** Vite prend en charge ces langages,
    ainsi que JSX et CSS, avec une configuration de départ simple.
-   **Écosystème de plugins :** son API de plugins permet d'ajouter ou
    de personnaliser des fonctionnalités. Elle est compatible avec de
    nombreux plugins de l'écosystème Rollup.

## 3. Comparaison entre Vite et CRA

  -----------------------------------------------------------------------
  Critère                 Vite                    Create React App (CRA)
  ----------------------- ----------------------- -----------------------
  Objectif                Outil moderne de        Outil de démarrage de
                          développement et de     projets React
                          build                   

  Développement           Utilise les modules ES  S'appuie sur Webpack
                          natifs et un serveur    pour le développement
                          rapide                  

  Mise à jour du code     HMR généralement rapide Les mises à jour
                                                  peuvent être plus
                                                  lentes sur de gros
                                                  projets

  Build de production     Utilise Rollup          Utilise Webpack

  Frameworks              React, Vue, Svelte,     Principalement React
                          etc.                    

  Configuration           Simple au départ,       Configuration initiale
                          personnalisable avec    simple,
                          des plugins             personnalisation plus
                                                  limitée sans outils
                                                  supplémentaires

  Fichier `index.html`    À la racine du projet   Généralement dans
                                                  `public/`
  -----------------------------------------------------------------------

**À retenir :** Vite est souvent le choix recommandé pour un nouveau
projet React. CRA reste important à connaître pour comprendre certains
projets existants, mais il n'est plus le choix privilégié pour démarrer
les nouveaux projets React.

## 4. Créer un projet React avec Vite

### Étape 1 --- Créer le projet

Dans un terminal, exécuter :

``` bash
npm create vite@latest
```

Suivre les questions affichées : 1. Donner un nom au projet. 2. Choisir
**React** comme framework. 3. Choisir **JavaScript** ou **TypeScript**
selon le besoin.

### Étape 2 --- Entrer dans le dossier du projet

``` bash
cd nom-du-projet
```

Remplacer `nom-du-projet` par le nom choisi à l'étape précédente.

### Étape 3 --- Installer les dépendances

``` bash
npm install
```

### Étape 4 --- Lancer le serveur de développement

``` bash
npm run dev
```

Le terminal affiche une adresse locale, souvent
`http://localhost:5173/`. Ouvrir cette adresse dans le navigateur.

## 5. Point important sur `index.html`

Avec Vite, le fichier `index.html` se trouve **à la racine du projet**.
Il ne faut pas le déplacer dans `public/` comme on le ferait souvent
dans un ancien projet CRA, car Vite l'utilise comme point d'entrée de
l'application.

## 6. Définitions à connaître

-   **Module :** fichier ou partie de code qui regroupe une
    fonctionnalité et peut être importé ou exporté.
-   **HMR (Hot Module Replacement) :** mécanisme qui applique certaines
    modifications sans recharger complètement la page.
-   **Modules ES natifs :** système JavaScript utilisant `import` et
    `export` pour organiser le code.
-   **Bundler :** outil qui prépare et regroupe les ressources d'une
    application pour leur utilisation.
-   **Tree-shaking :** technique qui élimine du code inutilisé afin de
    réduire la taille des fichiers générés.
-   **Plugin :** extension qui ajoute ou modifie les fonctionnalités
    d'un outil.

## Conclusion

Vite offre une expérience de développement rapide, une configuration
accessible et un système de build adapté aux applications modernes. Pour
un nouveau projet React, il constitue généralement un meilleur choix que
CRA. CRA reste toutefois utile lorsqu'on doit maintenir ou comprendre
une application existante.

> Remarque : les gains de performance exacts dépendent du projet, de la
> machine et de la configuration. Les chiffres de vitesse cités dans
> l'article ne doivent donc pas être considérés comme universels.
