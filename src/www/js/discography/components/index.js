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

    const template = document.getElementById('artist-list-template');

    const shadowRoot = this.attachShadow({ mode: "open" });

    //shadow.appendChild(template.cloneNode());
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // Exercise 2:
  //
  // Fetch all artists from the backend and render them into the
  // template's `<ul>' element.  Start simple by just inserting the
  // the name of the artist.
  connectedCallback() {
    // https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks
    if (!this.isConnected) {
      return;
    }

    // pre-bonus...
    // fetch('/api/artists').then((response) => {
    //   response.json().then((data) => {
    //     let newContent = '';

    //     data.forEach((el) => {
    //       newContent += '<li>' + el.name + '</li>';
    //     });

    //     this.shadowRoot.innerHTML = newContent;
    //   });
    // });

    // post-bonus...
    fetch('/api/artists').then((response) => {
      response.json().then((data) => {
        let newContent = '';

        data.forEach((el) => {
          newContent += '<artist-detail><span slot="name">' + el.name + '</span></artist-detail>';
        });

        this.shadowRoot.innerHTML += newContent;

        // you may be tempted to programatically construct it...
        // but the <slot> replacement is triggered on construct() during createElement()
        // we can fix that by adjusting when we generate the template in the constructor
        // data.forEach((el) => {
        //   let detail = document.createElement('artist-detail');
        //   detail.innerHTML = '<span slot="name">' + el.name + '</span>';
        //   this.shadowRoot.appendChild(detail);
        // });
      });
    });
  }
}

customElements.define("artist-list", ArtistList);
