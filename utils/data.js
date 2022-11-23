Book.deleteMany({});
// Create new instances of the model, a document
Book.create([
  { title: 'Hello, World', price: 5, inStock: true },
  { title: 'Hello World 2.0', price: 10, inStock: false },
  { title: 'Hello, World 3,0', price: 7, inStock: true },
  { title: 'Hello World 4.0', price: 20, inStock: true },
  { title: 'Hello, World 5.0', price: 2, inStock: false },
  { title: 'Hello World Infinity', price: 25, inStock: false },
  { title: 'Hello World Infinity and Beyond', price: 4, inStock: true },
]);