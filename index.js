window.onload = () => {
  const log = text => console.log(text);

  $.get("data/tweets.json")
    .then(tweets => {
      log(tweets);
      return $.get("data/friends.json");
    })
    .then(friends => {
      log(friends);
      return $.get("data/videos.json");
    })
    .then(videos => log(videos))
    .catch(err => log(err));

  /*
  const get = url => {
    return new Promise((resolve, reject) => {
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);
      xhttp.onload = () => {
        if (xhttp.status == 200) {
          resolve(JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };

      xhttp.onerror = () => {
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
  };

  let promise = get("data/tweets.json");

  promise
    .then(tweets => {
      log(tweets);
      return get("data/friends.json");
    })
    .then(friends => {
      log(friends);
      return get("data/videos.json");
    })
    .then(videos => log(videos))
    .catch(error => console.error(error));
    */
};
