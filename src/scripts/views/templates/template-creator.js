import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
  <a href="${`/#/detail/${restaurant.id}`}">
    <article tabIndex="0" class="post-item">
      <div class="city">
        <p tabIndex="0">${restaurant.city}</p>
      </div>
      <img tabIndex="0" class="lazyload post-item__thumbnail"
              src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
              alt="${restaurant.name}">
      <div class="post-item__content">
        <p tabIndex="0" class="post-item__rating">Rating : ${restaurant.rating}</p>
        <h1 tabIndex="0" class="post-item__title">${restaurant.name || '-'}</h1>
        <div class="post-item__description">
            <h2 class="description" tabIndex="0">Description</h2>
            <p tabIndex="0">${restaurant.description}</p>
        </div>
      </div>
    </article>
  </a>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail-item">
    <img tabIndex="0" class="lazyload detail-item__thumbnail"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            alt="${restaurant.name}">
    <div class="detail-item__content">
        <p tabIndex="0" class="detail-item__rating"><span class="star">★</span> ${restaurant.rating}</p>
        <h2 tabIndex="0" class="detail-item__title">${restaurant.name}</h2>
        <p tabindex="0">${restaurant.address}</p>
        <div class="detail-item__info">
          <div  id="categories" class="detail-item__info-content">
            <span tabindex="0" class="detail-item__info-title">Categories :</span>
          </div>
          <div id="food-menus" class="detail-item__info-content">
            <span tabindex="0" class="detail-item__info-title">Food Menus :</span>
          </div>
          <div id="drink-menus" class="detail-item__info-content">
            <span tabindex="0" class="detail-item__info-title">Drink Menus :</span>
          </div>
          <div class="detail-item__info-content">
            <span tabindex="0" class="detail-item__info-title">Description : </span>
            <span tabIndex="0">${restaurant.description || '-'}</span>
          </div>
        </div>
    </div>
    
  </div> 
  <div id="customer-reviews">
    <p tabindex="0" class="detail-item__info-title">Customer Reviews</p>
    <div>
      <input type="text" id="fname" name="fname" placeholder="Input your name..." class="review-input"><br>
      <textarea type="text" id="freview" name="freview" placeholder="Input your review..." rows="7" class="review-input"></textarea><br>
      <div class="btn-wrapper">
        <button type="submit" id="btn-submit" class="btn-submit">Submit</button>
      <div>
    </div>
  </div>
`;

const createLoadingTemplate = () => `
  <div class="loading">
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button  aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createLoadingTemplate,
};
