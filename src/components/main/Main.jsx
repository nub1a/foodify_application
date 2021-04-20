import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import './style.css';
import { Dish } from '../dish/Dish';

export const Main = ({
  currentDish, ingredients, fetchRandomDish, saveToFavorite, setFavoriteDishes,
}) => {
  useEffect(() => {
    const data = localStorage.getItem('favoriteDishes');
    if (data) {
      setFavoriteDishes(JSON.parse(data));
    }
  }, []);

  return (
    <div className="app">
      <div className="button_container">
        <Button variant="contained" color="default" onClick={() => (fetchRandomDish())}>
          Skip
        </Button>
        <Button variant="contained" color="default" onClick={() => (saveToFavorite())}>
          Save
        </Button>
      </div>
      <Dish
        currentDish={currentDish}
        ingredients={ingredients}
      />
    </div>
  );
};

Main.propTypes = {
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
