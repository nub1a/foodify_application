import React from 'react';
import PropTypes from 'prop-types';
import './Dish.css';

export const Dish = ({ currentDish, ingredients }) => (
  <div>
    <img
      src={currentDish.strMealThumb}
      className="dish_img"
      alt="Dish"
    />
    <h1>
      {currentDish.strMeal}
      {ingredients.length}
    </h1>
    <p>
      {currentDish.strInstructions}
    </p>
    <ul>
      Ingredients:
      {ingredients.map((data) => (<li key={data}>{data}</li>))}
    </ul>
  </div>
);

Dish.propTypes = {
  currentDish: PropTypes.shape({
    idMeal: PropTypes.number.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
  }).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};
