const api_url = "https://zenquotes.io/api/quotes/";
const zenQuotes = document.querySelector("#container");
const clickMe = document.getElementById("clickMe");

clickMe.addEventListener(
  "click", function(){
    location.reload();
  });

async function getapi(url) {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  const randomQuote = Math.floor(Math.random() * data.length);
  console.log(data[randomQuote]);
  const zenQuote = document.createElement("h1");
  const zenAuthor = document.createElement("h3");
  zenQuote.innerText = data[randomQuote].q;
  zenAuthor.innerText = data[randomQuote].a;
  console.log(zenQuote);
  zenQuotes.append(zenQuote, zenAuthor);
}
getapi(api_url);
