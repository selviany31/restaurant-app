import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantTemplate, createLoadingTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="posts">
          <h1 tabindex="0" class="posts__title">Explore Restaurant</h1>
          ${createLoadingTemplate()}
          <div tabindex="0" class="post__content"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.homeRestaurants();
    const restaurantsContainer = document.querySelector('.post__content');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });

    const Loading = document.querySelector('.loading');
    Loading.remove();
  },
};

export default Home;
