export const getIngredients = (data) => {
  const ingredientsData = [];
  const keysOfData = Object.keys(data);
  const ingredientsKeys = keysOfData.filter((key) => key.includes('strIngredient') || key.includes('strMeasure'));
  for (let i = 1; i <= ingredientsKeys.length; i += 1) {
    if (data[`strIngredient${i}`]) {
      ingredientsData.push(
        `${data[`strIngredient${i}`]} ${
          data[`strMeasure${i}`]}`,
      );
    }
  }

  return ingredientsData;
};
