import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

import './components/navbar-app';
import './components/drawer-bar';
import './components/hero-app';
import './components/footer-app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header__wrapper');
  const windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolled', windowPosition);
});
