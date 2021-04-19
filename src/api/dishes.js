const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const getRandomDish = () => (
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.meals['0'])
);
