const products = [{ id: 123, price: 500 }, { id: 456, price: 600 }];

let id = parseInt(process.argv[2]);

const checkPrice = productId =>
  new Promise((resolve, reject) => {
    products.map(item => {
      if (item.id === productId) {
        resolve(item.price);
      }
    });
    reject("Could not find item");
  });

checkPrice(id)
  .then(price => {
    console.log(`It costs ${price} EUR`);
  })
  .then(() => {
    console.log("next then");
  })
  .catch(error => {
    console.log(error);
  });
