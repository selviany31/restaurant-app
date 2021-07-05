class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabIndex="0">
        <p tabIndex="0">Copyright © 2021 - Sicip</p>
      </footer>
    `;
  }
}

customElements.define('footer-app', FooterApp);
