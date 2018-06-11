const ul = document.getElementById("authors");
const prefix =
  "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
const url = "http://api.icndb.com/jokes/random";

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url, { method: "get", mode: "cors" })
  .then(response => {
    return response.json();
  })
  .then(data => {
    let authors = data;
    console.log(authors);
  })
  .then()
  .catch(function(error) {});
