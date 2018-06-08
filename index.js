function lookPrice(id) {
  return new Promise(function(resolve, reject) {
    if (id === 123) {
      resolve("It costs 500 EUR");
    }
    if (id === 456) {
      resolve("It costs 400 EUR");
    } else {
      reject("Could not find item");
    }
  });
}

// function lookPrice(id) {
//   let price;
//   if (id === 123) {
//     price = "300 EUR";
//   } else {
//     price = "Could not find item";
//   }

//   return Promise.resolve(price);
// }

lookPrice(456)
  .then(function(price) {
    console.log(price);
  })
  .then(function() {
    console.log("The other 'then' is executed, price:");
  })
  .catch(function(err) {
    console.log(err);
  });
