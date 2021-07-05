import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantTemplate, createLoadingTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="posts">
          <h1 tabindex="0" class="posts__title">Favorite Restaurant</h1>
          ${createLoadingTemplate()}
          <div tabindex="0" class="post__content"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.post__content');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });

    const Loading = document.querySelector('.loading');
    Loading.remove();
  },
};

export default Favorite;
