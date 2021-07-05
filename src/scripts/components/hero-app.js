class HeroApp extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero">
        <div class="hero__inner">
            <h1 tabindex="0" class="hero__title">Welcome to the New Restaurant Review, SICIP.</h1>
            <p tabindex="0" class="hero__tagline">Find out the best restaurant in Indonesia</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-app', HeroApp);
