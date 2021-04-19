import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Dish } from '../../components/dish/Dish';

export const FavoritePage = ({ favoriteDishes, setFavoriteDishes }) => {
  const [favoriteDish, setFavoriteDish] = useState({});
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('favoriteDishes');
    if (localData) {
      setFavoriteDishes(JSON.parse(localData));
    }
  }, [localStorage]);

  const showFavMeal = (event) => {
    event.preventDefault();
    const mealName = event.target.innerText;
    const localData = JSON.parse(localStorage.getItem('favoriteDishes'));
    const chosenDish = localData.find((dish) => dish.strMeal === mealName);
    setFavoriteDish(chosenDish);

    const ingredientsData = [];
    for (let i = 1; i <= 20; i += 1) {
      if (chosenDish[`strIngredient${i}`]) {
        ingredientsData.push(
          `${chosenDish[`strIngredient${i}`]} ${
            chosenDish[`strMeasure${i}`]}`,
        );
      }
    }
    const filteredIngredients = ingredientsData.filter((data) => data.length > 3);
    setIngredients(filteredIngredients);
  };

  const deleteFavMeal = (event) => {
    event.preventDefault();
    const deleteId = event.target.value;
    const data = localStorage.getItem('favoriteDishes');
    localStorage.clear();
    const newData = JSON.parse(data);
    newData.splice(deleteId, 1);
    localStorage.setItem('favoriteDishes', JSON.stringify(newData));
    setFavoriteDishes(newData);
    setFavoriteDish({});
    setIngredients([]);
  };

  return (
    <div>
      Favorite Dishes!
      <ul>
        {favoriteDishes.map((dish, index) => (
          <li key={dish.idMeal}>
            <button type="button" onClick={showFavMeal}>
              {dish.strMeal}
            </button>
            <button value={index} type="button" onClick={deleteFavMeal}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Dish ingredients={ingredients} currentDish={favoriteDish} />
    </div>
  );
};

FavoritePage.propTypes = {
  favoriteDishes: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
  })).isRequired,
  setFavoriteDishes: PropTypes.func.isRequired,
};
