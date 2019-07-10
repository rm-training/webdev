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
    modal.style.position = "fixed";
    modal.style.top = "25%";
    modal.style.left = "25%";
    modal.style.width = "50vw";
    modal.style.height = "50vh";
    modal.style.border = "1px solid #000";
    modal.style.display = "none";
    modal.style.backgroundColor = "white";
    modal.style.overflow = "scroll";

    this.shadowRoot.appendChild(modal);

    this.shadowRoot.firstElementChild.addEventListener("click", function() {
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
