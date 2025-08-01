import logo from './logo.svg';
import { useEffect, useState } from 'react';

function App() {
  const [recipeFormShown, showRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([]);

  let submitRecipe = (event) => {
    event.preventDefault()
    console.log(event);

    let newRecipeName = document.getElementById('newRecipeName').value;
    let newRecipeInstructions = document.getElementById('newRecipeInstructions').value;

    setRecipes([...recipes,
    {
      name: newRecipeName,
      instructions: newRecipeInstructions
    }
    ])
    console.log(recipes);
    showRecipeForm(false);

  }

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {
        recipeFormShown ?
          <>
            <form id="recipe-form" name='recipe-form' onSubmit={submitRecipe}>
              <label htmlFor="newRecipeName">Recipe name: </label>
              <input type="text" id="newRecipeName" />
              <label htmlFor="newRecipeInstructions">Instructions:</label>
              <textarea id="newRecipeInstructions" placeholder="write recipe instructions here..." />
              <input type="submit" />
            </form>
          </>
          :
          <>
            {recipes.length < 1 ?
              <p>There are no recipes to list.</p>
              :
              recipes.map((recipe) => {
                return <div><label id="name">Recipe name: {recipe.name}</label><label id="instructions">Instructions: {recipe.instructions}</label></div>
              })
            }

            <button onClick={() => showRecipeForm(!recipeFormShown)}>Add Recipe</button>
          </>

      }
    </div>
  );
}



export default App;