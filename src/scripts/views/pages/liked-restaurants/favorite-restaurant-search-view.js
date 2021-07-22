import { createRestaurantTemplate, createLoadingTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
        <div class="posts">
            <h1 tabindex="0" class="posts__title">Favorite Restaurant</h1>
            <input id="query" class="input-search" type="text" placeholder="Search favorite restaurant...">
            ${createLoadingTemplate()}
            <div tabindex="0" id="post__content" class="post__content"></div>
        </div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('post__content').innerHTML = html;

    document.getElementById('post__content').dispatchEvent(new Event('post__content:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
