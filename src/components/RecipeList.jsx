import React from "react";
import "./RecipeList.scss";

const RecipeList = ({ title, image, calories, ingredients }) => {
  return (
    <div className="container mt-3">
      <img src={image} alt={title} />
      <div className="recipe_card" key={title}>
        <div className="recipe_card__text">
          <h1>{title}</h1>
          <p className="font-weight-bold text-uppercase text-center">Ingredients</p>
          <ul>
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ul>
          <div class="recipe_card__text__calories">
            <h2>Calories:</h2>
            <p className="text-p"> {Math.trunc(calories)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
