const ul = document.getElementById("authors");
const prefix =
  "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
// const url = "http://api.icndb.com/jokes/random";
const url = "https://api.lyrics.ovh/v1/Pet Shop Boys/Suburbia";

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url, { method: "get", mode: "cors" })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    $("#lyrics").text(data.lyrics);
  })
  .catch(function(error) {
    console.log(error);
  });
