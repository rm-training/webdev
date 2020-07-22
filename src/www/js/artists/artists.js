// In the index.html file there is a button.  When the button is
// clicked kick off an HTTP GET request to the following URL:
//
//   /api/artists
//
// The response text will be a JSON-encoded array of objects.  Inspect
// the response using the browser debugger and then insert the objects
// into the DOM.  Each artist in the response should be used to create
// a new <li> element in the existing <ul> container (the one with the
// ID of "artists").  Display the name of each artist inside the newly
// created <li> elements.
//
// BONUS #1:
//
// We want to display a loading indicator when the user clicks the button.
// The SemanticUI Style Library has a class that displays a loading "spinner".
//
// Make it so that when the button is clicked, a class of "loading" is added
// to the button element's class list
// And, after the content is loaded, the "loading" class is removed.
//
// BONUS #2:
//
// Clicking one of the <li> elements should display all information
// about the clicked artist in the <ul> with the ID of "details".
// (Hint: make another HTTP request to /api/artists/N where N is the
// artist ID.)
//
// BONUS #3:
//
// After displaying a list of artist details, also display a list of
// album names.  A list of albums can be fetched using the following
// URL:
//     /api/artists/N/albums
//

const button = document.querySelector("button");
const artistList = document.getElementById("artists");
const details = document.getElementById("details");

button.addEventListener("click", function(e) {
  const button = e.target;

  // Bonus #1
  button.classList.add("loading");

  // @todo - faking a delay...?

  let req = new XMLHttpRequest();
  req.addEventListener("load", function(e) {
    // @todo - what about if the xhr request fails...?
    button.classList.remove("loading");

    if (req.status == 200) {
      const artists = JSON.parse(req.responseText);

      for (let i = 0; i < artists.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = artists[i].name;
        artistList.appendChild(newLi);

        // Bonus #2...
        newLi.dataset.id = artists[i].id;
        newLi.addEventListener("click", artistLiClickHandler);
      }
    }
  });

  req.open("GET", "/api/artists");
  req.send(null);
});

function artistLiClickHandler(e) {
  let artistId = e.target.dataset.id;

  let req = new XMLHttpRequest();
  req.addEventListener("load", function(e) {
    if (req.status == 200) {
      const artist = JSON.parse(req.responseText);

      details.innerHTML = `<h2>Formed in ${artist.formation_year}</h2>`;
    }
  });

  req.open("GET", `/api/artists/${artistId}`);
  req.send(null);
}
