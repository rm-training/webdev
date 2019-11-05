class ArtistDetail extends HTMLElement {
  // Exercise 3:
  //
  // Create a template for displaying a single artist.  The template
  // should use slots to display the name of the artist as well as the
  // formation year.
  //
  // When you are done, go back to the `index.js' component and have
  // it create `<artist-detail>' elements with the correct slots.
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    const template = document.getElementById("artist-detail-template");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


  // Bonus Exercise:
  //
  // Fetch all of the albums for artist and display them.
  //
  // Example URL for artist 2:
  //
  //   /api/artists/2/albums
  //
  // For an example, see: http://localhost:3000/js/demo/
  connectedCallback() {
    const modal = document.createElement("div");
    modal.classList.add('ui');
    modal.classList.add('segment');
    modal.classList.add('raised');
    modal.classList.add('modal');
    //
    // modal.style.position = "fixed";
    // modal.style.top = "25%";
    // modal.style.left = "25%";
    // modal.style.width = "50vw";
    // modal.style.height = "50vh";
    // modal.style.display = "none";
    // modal.style.overflow = "scroll";

    // styles don't penetrate a web component
    // so if you want it to be styled like the outside page (ie: SemanticUI) we have to load those styles
    // which is a bummer
    const stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', '/vendor/semantic-ui/semantic.css');

    this.shadowRoot.appendChild(stylesheet);
    this.shadowRoot.appendChild(modal);

    this.shadowRoot.firstElementChild.addEventListener("click", function() {
      // @todo - how do I make this "id" dynamic? maybe use an attribute...
      fetch("/api/artists/1/albums")
        .then(response => {
          return response.json();
        })
        .then(data => {
          modal.style.display = "block";
          console.log(data);
          data.forEach(el => {
            const item = document.createElement("p");
            item.innerHTML = `${el.name} through ${el.label}`;
            modal.appendChild(item);
          });
        });
    });
  }
}

customElements.define("artist-detail", ArtistDetail);
