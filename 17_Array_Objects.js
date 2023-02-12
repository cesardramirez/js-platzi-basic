var articles = [
  { name: "Bici", cost: 3000 },
  { name: "Tv", cost: 2500 },
  { name: "Libro", cost: 320 },
  { name: "Celular", cost: 1000 },
  { name: "Portatil", cost: 20000 },
  { name: "Teclado", cost: 500 },
  { name: "Audifonos", cost: 1700 },
]

// filter() : Obtener elementos según un criterio de búsqueda.
var articlesLessThan500 = articles.filter(function(article) {
    return article.cost <= 500;
});
console.log(articlesLessThan500); // [ { name: 'Libro', cost: 320 }, { name: 'Teclado', cost: 500 } ]

// map() : Recorre cada elemento e interactuar con cada uno.
var articleNames = articles.map(function(article) {
    return article.name;
})
console.log(articleNames) // [ 'Bici', 'Tv', 'Libro', 'Celular', 'Portatil', 'Teclado', 'Audifonos' ]
