class ArtistList extends HTMLElement {
  // Exercise 1:
  //
  // Create a `<template>' in the index.html file that will be used to
  // display a list of all artists.  In the constructor below, fetch
  // that template and insert it into the shadow DOM.
  //
  // Your template should have a <ul> where you can insert artists in
  // the next exercise.
  constructor() {
    super();

    const template = document.getElementById("artist-list-template");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Exercise 2:
  //
  // Fetch all artists from the backend and render them into the
  // template's `<ul>' element.  Start simple by just inserting the
  // the name of the artist.
  connectedCallback() {
    const ul = this.shadowRoot.querySelector("ul");
    fetch("/api/artists")
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        throw new Error(response.statusText);
      })
      .then(data => {
        data.forEach(artist => {
          const li = document.createElement("li");
          const artistDetail = document.createElement("artist-detail");

          const slot1 = document.createElement("span");
          slot1.setAttribute("slot", "name");
          slot1.innerHTML = artist.name;

          const slot2 = document.createElement("span");
          slot2.setAttribute("slot", "year");
          slot2.innerHTML = artist.formation_year;

          artistDetail.appendChild(slot1);
          artistDetail.appendChild(slot2);

          li.appendChild(artistDetail);
          ul.appendChild(li);

          // slot links are "live"
          // if we modify the slotted value, it will update in the utilized template
          // setTimeout(() => {
          //   slot1.innerHTML = "bump";
          // }, 5000);
        });
      });
  }
}

customElements.define("artist-list", ArtistList);
