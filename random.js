const generateRandomNumber = () =>
  new Promise((resolve, reject) => {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    randomNumber <= 5 ? resolve(randomNumber) : reject(randomNumber);
  });

generateRandomNumber()
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });
