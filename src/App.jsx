import React, { useEffect, useState } from 'react';
import './App.css';
import { getRandomDish } from './api/dishes';
import { Dish } from './components/dish/Dish';

export const App = () => {
  const [currentDish, setCurrentDish] = useState({});
  const [ingredients, setIngredients] = useState([]);
  // const [favoriteDishes, setFavoriteDishes] = useState([]);

  const fetchRandomDish = async () => {
    const fetchedDish = await getRandomDish();
    const ingredientsData = [];
    for (let i = 1; i <= 20; i += 1) {
      if (fetchedDish[`strIngredient${i}`]) {
        ingredientsData.push(
          `${fetchedDish[`strIngredient${i}`]} ${
            fetchedDish[`strMeasure${i}`]}`,
        );
      }
    }
    const filteredIngredients = ingredientsData.filter((data) => data.length > 3);
    setIngredients(filteredIngredients);
    setCurrentDish(fetchedDish);
  };

  // const saveToFavorite = () => {
  //   setFavoriteDishes((prevFav) => [...prevFav, currentDish]);
  // };

  useEffect(() => {
    fetchRandomDish();
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
        onClick={() => (fetchRandomDish())}
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
