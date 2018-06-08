function generateRandomNumber() {
  return new Promise(function(resolve, reject) {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber <= 5) {
      resolve(randomNumber);
    } else {
      reject(randomNumber);
    }
  });
}

generateRandomNumber()
  .then(function(result) {
    console.log("Success:", result);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });
