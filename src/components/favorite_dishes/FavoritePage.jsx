import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, TextField, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, TextareaAutosize,
} from '@material-ui/core';
import { Dish } from '../dish/Dish';
import { getIngredients } from '../../utils/utils';
import './style.css';

export const FavoritePage = ({ favoriteDishes, setFavoriteDishes }) => {
  const [favoriteDish, setFavoriteDish] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState('');
  const [instruction, setInstruction] = useState('');
  const [open, setOpen] = React.useState(false);

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
    setIngredients(getIngredients(chosenDish));
  };

  const deleteFavMeal = (event) => {
    event.preventDefault();
    const deleteId = event.target.value;
    const data = localStorage.getItem('favoriteDishes');
    const newData = JSON.parse(data);
    newData.splice(deleteId, 1);
    localStorage.setItem('favoriteDishes', JSON.stringify(newData));
    setFavoriteDishes(newData);
    setFavoriteDish({});
    setIngredients([]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTitle('');
    setInstruction('');
  };

  const handleChangeTitle = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleChangeInstruction = (event) => {
    const { value } = event.target;
    setInstruction(value);
  };

  const addDish = () => {
    const dish = {
      idMeal: favoriteDishes.length + 1,
      strMeal: title,
      strInstructions: instruction,
    };

    setFavoriteDishes((prevDishes) => [...prevDishes, dish]);
    setTitle('');
    setInstruction('');
    setOpen(false);
  };

  return (
    <div>
      {favoriteDishes.length ? 'Favorite dishes:' : 'You don`t have favorite dishes'}
      <ul>
        {favoriteDishes.map((dish, index) => (
          <li key={dish.idMeal}>
            <button type="button" onClick={showFavMeal} className="dish_button">
              {dish.strMeal}
            </button>
            <Button variant="contained" color="default" value={index} onClick={deleteFavMeal}>
              Delete
            </Button>
          </li>
        ))}
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleClickOpen}>
          Add a dish
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add your recipe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add a name of dish and cooking instruction
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={title}
              onChange={handleChangeTitle}
              label="Name of a dish"
              type="title"
              fullWidth
            />
            <TextareaAutosize
              aria-label="maximum height"
              placeholder="Instruction"
              value={instruction}
              onChange={handleChangeInstruction}
              style={{ width: '-webkit-fill-available', height: '50px' }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={addDish} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </ul>
      {favoriteDish.idMeal
        ? <Dish ingredients={ingredients} currentDish={favoriteDish} />
        : ''}

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
