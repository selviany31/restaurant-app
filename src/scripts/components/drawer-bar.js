class DrawerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://www.linkedin.com/in/selviany/" target="_blank" rel="noreferrer">About Us</a></li>
      </ul>
    `;
  }
}

customElements.define('drawer-bar', DrawerBar);
