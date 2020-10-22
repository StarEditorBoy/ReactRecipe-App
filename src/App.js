import React, { useEffect, useState } from "react";
import style from "./styles.css";
import Recipe from "./Recipe";
const App = () => {
  const APP_ID = "06d9433a"; //*****You have to do a last */
  const APP_KEY = "37b5b74816f5dd304965ec1542b84f25";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cake");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    //console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    //console.log(search); to see that search get updated till user press search btn
  };

  const getSearch = (e) => {
    //we will call this method after the form submits
    e.preventDefault(); //to prevent page from refreshing on click
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
