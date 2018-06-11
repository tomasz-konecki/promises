const generateRandomNumber = () =>
  new Promise((resolve, reject) => {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber <= 5) {
      resolve(randomNumber);
    } else {
      reject(randomNumber);
    }
  });

generateRandomNumber()
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Error:", error);
  });
