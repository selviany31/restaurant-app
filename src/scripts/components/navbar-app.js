class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="header__inner">
          <img class="header__logo" src="./images/logo/white_logo.png" alt="logo" />
          <h1 class="header__title">SICIP.</h1>
      </div>
      <button id="menu" class="header__menu">☰</button>
    `;
  }
}

customElements.define('navbar-app', Navbar);
