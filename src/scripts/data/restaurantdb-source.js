import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async homeRestaurants() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.POSTREVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(review),
    });
    return response;
  }
}

export default TheRestaurantDbSource;
