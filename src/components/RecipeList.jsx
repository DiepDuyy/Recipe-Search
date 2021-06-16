import React from "react";
import './RecipeList.scss';

const RecipeList = ({ title, image, calories, ingredients }) => {
  return (
    <div className="card mt-3" key={title}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p className="text-p">Calories: {calories}</p>
    </div>
  );
};

export default RecipeList;
