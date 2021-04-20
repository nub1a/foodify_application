import React from 'react';
import PropTypes from 'prop-types';
import './Dish.css';

export const Dish = ({ currentDish, ingredients }) => (
  <div className="dish_container">
    {currentDish.strMealThumb ? (
      <img
        src={currentDish.strMealThumb}
        className="dish_img"
        alt="Dish"
      />
    )
      : ''}

    <h1>
      {currentDish.strMeal}
    </h1>
    {ingredients.length
      ? (
        <ul className="ingredients">

          <h3>Ingredients:</h3>
          {ingredients.map((data) => (<li key={data}>{data}</li>))}
        </ul>
      )
      : ''}

    <p>
      {currentDish.strInstructions}
    </p>
  </div>
);

Dish.propTypes = {
  currentDish: PropTypes.shape({
    idMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};
