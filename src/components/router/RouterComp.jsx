import React, { useState, useEffect } from 'react';
import {
  HashRouter, Route, Switch, Redirect, Link,
} from 'react-router-dom';
import { FavoritePage } from '../../pages/favorite_dishes/FavoritePage';
import { App } from '../../App';
import { getRandomDish } from '../../api/dishes';

export const RouterComp = () => {
  const [currentDish, setCurrentDish] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [favoriteDishes, setFavoriteDishes] = useState([]);

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

  const saveToFavorite = () => {
    setFavoriteDishes([...favoriteDishes, currentDish]);
  };

  useEffect(() => {
    fetchRandomDish();
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteDishes', JSON.stringify(favoriteDishes));
  }, [favoriteDishes]);

  return (
    <div>
      <HashRouter basename="/">
        <Link to="/main">Main Page</Link>
        <Link to="/favorites">Favorites page</Link>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect to="/main" />
            )}
          />
          <Route path="/main">
            <App
              currentDish={currentDish}
              ingredients={ingredients}
              fetchRandomDish={fetchRandomDish}
              saveToFavorite={saveToFavorite}
              setFavoriteDishes={setFavoriteDishes}
            />
          </Route>
          <Route path="/favorites">
            <FavoritePage favoriteDishes={favoriteDishes} setFavoriteDishes={setFavoriteDishes} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};
