const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => { // metriques de performances d'une applications, les cles qui nous permet de mesurer
      // les 5 grandes metrics de perfomance web
      getCLS(onPerfEntry); // Cumulatif layout shift : mesur de la stabilite visuelle
      getFID(onPerfEntry); // First input delay : 
      getFCP(onPerfEntry); // First contentfull paint : mesur temporarire du temps entre l'ariver du donner chez le navigateur et l'affichage de qlq chose qu'on peut voir sur l'ecrant // premier contenu visible
      getLCP(onPerfEntry); // Largest Contentfull Pain : entre la req et l'arrive des donnees et l'affichage
      getTTFB(onPerfEntry);// Time to first byte: temps qui s'ecoule entre la req du nav et le temps de recois du reponce
    });
  }
};

export default reportWebVitals;
