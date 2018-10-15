const products = [
  { id: 123, price: 500 },
  { id: 456, price: 600 },
  { id: 789, price: 1000 }
];

let id = parseInt(process.argv[2]);

const checkPrice = productId =>
  new Promise((resolve, reject) => {
    products.map(item => (item.id === productId ? resolve(item.price) : null));
    reject("Could not find item");
  });

checkPrice(id)
  .then(price => {
    console.log(`It costs ${price} EUR`);
  })
  .then(() => {
    console.log("Thank you.");
  })
  .catch(error => {
    console.log("Error:", error);
  });
