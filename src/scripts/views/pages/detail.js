import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate, createLoadingTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div class="posts">
        <h1 tabindex="0" class="posts__title">Detail Restaurant</h1>
        ${createLoadingTemplate()}
        <div tabindex="0" class="detail"></div>
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurants(url.id);
    const restaurantContainer = document.querySelector('.detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    const categoryData = document.querySelector('#categories');
    restaurant.restaurant.categories.forEach((category) => {
      categoryData.innerHTML += `<span tabindex="0">${category.name}, </span>`;
    });

    const foodMenus = document.querySelector('#food-menus');
    restaurant.restaurant.menus.foods.forEach((food) => {
      foodMenus.innerHTML += `<span tabindex="0">${food.name}, </span>`;
    });

    const drinkMenus = document.querySelector('#drink-menus');
    restaurant.restaurant.menus.drinks.forEach((drink) => {
      drinkMenus.innerHTML += `<span tabindex="0">${drink.name}, </span>`;
    });

    const reviews = document.querySelector('#customer-reviews');
    restaurant.restaurant.customerReviews.forEach((review) => {
      reviews.innerHTML += `
        <div class="customer-reviews__content">
          <p tabindex="0" class="review-name">${review.name}</p>
          <p tabindex="0">${review.review}</p>
          <p tabindex="0" class="review-date"> Posted at ${review.date}</p> 
        </div>
      `;
    });

    const btnReview = document.querySelector('#btn-submit');
    const inputName = document.querySelector('#fname');
    const inputReview = document.querySelector('#freview');
    btnReview.addEventListener('click', () => {
      const review = {
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      };
      const addReview = TheRestaurantDbSource.postReview(review);
      console.log(addReview);
      inputName.value = '';
      inputReview.value = '';
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        city: restaurant.restaurant.city,
        description: restaurant.restaurant.description,
      },
    });

    const Loading = document.querySelector('.loading');
    Loading.remove();
  },
};

export default Detail;
