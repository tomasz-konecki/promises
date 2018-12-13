// fetch("https://www.reddit.com/r/javascript/top/.json?limit=5")
//   .then(res => res.json())
//   .then(json => console.log(json));

// async function fetchTopFive(sub) {
//   const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
//   const fetchResult = fetch(URL);
//   const response = await fetchResult;
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// fetchTopFive("javascript");

async function fetchTopFive(sub) {
  const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`;
  try {
    const fetchResult = fetch(
      new Request(URL, { method: "GET", cache: "reload" })
    );
    const response = await fetchResult;
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (e) {
    throw Error(e);
  }
}

fetchTopFive("javascript");
