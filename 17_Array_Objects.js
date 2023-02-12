var articles = [
  { name: "Bici", cost: 3000 },
  { name: "Tv", cost: 2500 },
  { name: "Libro", cost: 320 },
  { name: "Celular", cost: 1000 },
  { name: "Portatil", cost: 20000 },
  { name: "Teclado", cost: 500 },
  { name: "Audifonos", cost: 1700 },
  { name: "Portatil", cost: 2100 },
]

// filter() : Obtener elemento(s) según un criterio de búsqueda. Crea un nuevo array.
var articlesLessThan500 = articles.filter(function(article) {
  return article.cost <= 500;
});
console.log(articlesLessThan500); // [ { name: 'Libro', cost: 320 }, { name: 'Teclado', cost: 500 } ]

// find() : Obtiene el primer elemento que cumpla con el criterio de búsqueda.
var findArticleByName = articles.find(function(article) {
  return article.name === "Portatil";
});
console.log(findArticleByName);  // [ { name: 'Portatil', cost: 20000 } ]

// map() : Recorre cada elemento e interactua con cada uno. Crea un nuevo array.
var articleNames = articles.map(function(article) {
  return article.name;
})
console.log(articleNames) // [ 'Bici', 'Tv', 'Libro', 'Celular', 'Portatil', 'Teclado', 'Audifonos', 'Portatil' ]

// forEach() : Recorre cada elemento del array.
articles.forEach(function(article) {
  console.log(article.name)  // Bici, Tv, Libro, ...
});

// some() : Retorna verdadero si cumple la condición en algún elemento.
var cheapArticles = articles.some(function(article) {
  return article.cost <= 700;
});
console.log(cheapArticles);  // true