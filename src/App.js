import { useEffect, useState } from "react";
import "./App.css";
import { Application_keys, Application_ID } from "./constants/App_Contants";
import RecipeList from "./components/RecipeList";

const App = () => {
  const APP_ID = Application_ID;
  const APP_KEY = Application_keys;
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('chicken');

  const URL_GET = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    // getRecipes();
    async function getRecipes() {
      const response = await fetch(URL_GET);
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  

  const handleSearch = e => {
    e.preventDefault();
    setQuery(keyword);
    setKeyword('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch} className="form">
        <input
          className="form-input"
          placeholder="Enter to search"
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <button type="submit" className="form-button btn btn-warning text-white text-uppercase">
          Search
        </button>
      </form>
      
        {recipes.map((recipe) => (
          <RecipeList
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
    </div>
  );
};

export default App;
