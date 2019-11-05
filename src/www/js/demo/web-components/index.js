// const modalWindowTemplate = document.createElement('template');
// modalWindowTemplate.innerHTML = `
//     <style>
//         :host.opened {
//             background-color: #fff;
//         }
//         #wrapper {
//             display: none;
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//         }
//         .opened #wrapper {
//             display: flex;
//         }
//         #modal {
//             box-sizing: border-box;
//             padding: 2rem;
//             background-color: #fff;
//             border-radius: 5px;
//             border: 1px solid #000;
//             flex-basis: 50%;
//             margin-left: 25%;
//             overflow-y: scroll;
//         }
//         #header {
//             font-size: 3em;
//             background-color: blue;
//         }
//         #body {
//             font-size: 2em;
//             background-color: grey;
//         }
//     </style>
//     <div id="wrapper">
//         <div id="modal">
//             <div id="header">
//                 <slot name="header"></slot>
//             </div>
//             <div id="body">
//                 <slot name="body"></slot>
//             </div>
//         </div>
//     </div>
// `;

class ModalWindow extends HTMLElement {
    constructor () {
        super();

        const templateElement = document.getElementById('modal-window-template');

        this.attachShadow({mode: 'open'});

        const fragment = document.createDocumentFragment();
        this.triggerLink = document.createElement('a');
        this.triggerLink.innerHTML = 'Click me';

        fragment.appendChild(templateElement.content.cloneNode(true));
        //fragment.appendChild(modalWindowTemplate.content.cloneNode(true));
        fragment.appendChild(this.triggerLink);

        this.shadowRoot.appendChild(fragment);

        this.clickHandler = (e) => {
            this.showThing();
        }
    }

    showThing() {
        console.log('show');
        this.classList.add('opened');
    }

    hideThing() {
        this.classList.remove('opened');
    }

    attachListeners() {
        this.triggerLink.addEventListener('click', this.clickHandler);
    }

    detachListeners() {
        this.triggerLink.removeEventListener('click', this.clickHandler);
    }

    connectedCallback () {
        console.log('connected');
        this.attachListeners();
    }
}
customElements.define('modal-window', ModalWindow);

class ListOfThings extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({mode: 'open'});

        const template = document.getElementById('list-of-things-template');
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('list-of-things', ListOfThings);

class SpecialList extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
    }
}
customElements.define('special-list', SpecialList, {
    extends: 'ul'
});