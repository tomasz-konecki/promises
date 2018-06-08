var isMomHappy = true;

// Promise
var willGetNewPhone = new Promise(function(resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black"
    };
    resolve(phone);
  } else {
    var reason = new Error("mom is not happy");
    reject(reason);
  }
});

// call our promise
var askMom = function() {
  willGetNewPhone
    .then(showOff)
    .then(function(fulfilled) {
      console.log(fulfilled);
    })
    .catch(function(error) {
      console.log(error.message);
    });
};

// 2nd promise
// var showOff = function(phone) {
//   return new Promise(function(resolve, reject) {
//     var message =
//       "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

//     resolve(message);
//   });
// };

// 2nd promise shortened
var showOff = function(phone) {
  var message =
    "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

  // return Promise.resolve(message);
};

askMom();
