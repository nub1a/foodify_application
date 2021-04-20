import React, { useState, useEffect } from 'react';
import {
  HashRouter, Route, Switch, Redirect, Link,
} from 'react-router-dom';
import {
  AppBar, Button, Container, Grid,
} from '@material-ui/core';
import { useStyles } from './style';
import { FavoritePage } from '../favorite_dishes/FavoritePage';
import { Main } from '../main/Main';
import { getRandomDish } from '../../api/dishes';
import { getIngredients } from '../../utils/utils';

export const RouterComp = () => {
  const [currentDish, setCurrentDish] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [favoriteDishes, setFavoriteDishes] = useState([]);
  const classes = useStyles();

  const fetchRandomDish = async () => {
    const fetchedDish = await getRandomDish();
    setIngredients(getIngredients(fetchedDish));
    setCurrentDish(fetchedDish);
  };

  const saveToFavorite = () => {
    const dishAlreadyExist = favoriteDishes.some((dish) => dish.idMeal === currentDish.idMeal);
    if (dishAlreadyExist) return;
    setFavoriteDishes([...favoriteDishes, currentDish]);
  };

  useEffect(() => {
    fetchRandomDish();
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteDishes', JSON.stringify(favoriteDishes));
  }, [favoriteDishes]);

  return (
    <HashRouter basename="/">
      <AppBar
        className={classes.navigation}
      >
        <Link to="/main">
          <Button variant="contained" color="primary" href="/main">
            Main
          </Button>
        </Link>
        <Link to="/favorites">
          <Button variant="contained" color="primary">
            Favorites
          </Button>
        </Link>
      </AppBar>
      <Container>
        <Grid
          container
          className={classes.container}
        >
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to="/main" />
              )}
            />
            <Route path="/main">
              <Main
                currentDish={currentDish}
                ingredients={ingredients}
                fetchRandomDish={fetchRandomDish}
                saveToFavorite={saveToFavorite}
                setFavoriteDishes={setFavoriteDishes}
              />
            </Route>
            <Route path="/favorites">
              <FavoritePage
                favoriteDishes={favoriteDishes}
                setFavoriteDishes={setFavoriteDishes}
              />
            </Route>
          </Switch>
        </Grid>
      </Container>
    </HashRouter>
  );
};
