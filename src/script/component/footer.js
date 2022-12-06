class Footer extends HTMLElement {
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
            <footer>
                <div class="text-white text-center bg-dark pt-2 pb-2">
                  Copyright © 2022, Belajar Fundamental Front-End Web Development by Nely Dwi Agustin
                </div>
            </footer>
        `;
    }
  }
  customElements.define("footer-bar", Footer);