import React from "react";
import style from "./Recipe.module.css";
const Recipe = (props) => {
  return (
    <div className={style.recipe}>
      <h1>{props.title}</h1>
      <ol>
        {props.ingredients.map((ing) => (
          <li>{ing.text}</li>
        ))}
      </ol>
      <p>{props.calories}</p>
      <img src={props.image} alt="Recipe" />
    </div>
  );
};
export default Recipe;
