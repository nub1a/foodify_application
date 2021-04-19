import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Dish } from './components/dish/Dish';

export const App = ({
  currentDish, ingredients, fetchRandomDish, saveToFavorite, setFavoriteDishes,
}) => {
  useEffect(() => {
    const data = localStorage.getItem('favoriteDishes');
    if (data) {
      setFavoriteDishes(JSON.parse(data));
    }
  }, []);

  return (
    <div className="App">

      <button
        type="button"
        onClick={() => (fetchRandomDish())}
      >
        Skip
      </button>
      <button
        type="button"
        onClick={() => (saveToFavorite())}
      >
        Save
      </button>
      <Dish
        currentDish={currentDish}
        ingredients={ingredients}
      />
    </div>
  );
};

App.propTypes = {
  currentDish: PropTypes.shape({
    idMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  fetchRandomDish: PropTypes.func.isRequired,
  saveToFavorite: PropTypes.func.isRequired,
  setFavoriteDishes: PropTypes.func.isRequired,
};
