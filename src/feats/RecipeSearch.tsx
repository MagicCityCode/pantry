import React, { useState, useEffect } from 'react';
// import service from '../utils/api-service'; // Bring this back soon
import { ISpoonacularRecipe } from '../utils/types';

const RecipeSearch: React.FC = () => {
  const [newFormEntry, setNewFormEntry] = useState<{ [key: string]: string }>({});
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setNewFormEntry((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [recipeSearchResults, setRecipeSearchResults] = useState<ISpoonacularRecipe[]>([]);

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch('/recipes-by-ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormEntry),
    })
      .then((r: any) => r.json())
      .then((r: any) => {
        setRecipeSearchResults(r);
      })
      .catch((err: any) => console.log({ Error: err, Status: err.status, Message: err.message }));
  };

  const [userAvailableInventory, setUserAvailableInventory] = useState<any[]>([]);
  const userId = 1; // Replace this w/ authenticated user's ID
  useEffect(() => {
    fetch(`/available-inventory/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((r) => r.json())
      .then((r) => {
        setUserAvailableInventory(r);
      })
      .catch((err) => console.log(err));
  }, []);

  const prepIngredientsListForSpoonacular = (arr: any) => {
    // function prepIngredientsListForSpoonacular(arr) {
    //   let ingredientsFromInventoryString = '';
    //   if (arr.length === 1) {
    //     ingredientsFromInventoryString = arr[0];
    //   } else if (arr.length === 2) {
    //     ingredientsFromInventoryString = arr[0] + ', ' + arr[1];
    //   } else {
    //     for (let i = 0; i < arr.length; i++) {
    //       if (i === arr.length - 1) {
    //         ingredientsFromInventoryString = ingredientsFromInventoryString + arr[i];
    //       } else if (i === 0) {
    //         ingredientsFromInventoryString = arr[i];
    //       } else {
    //         ingredientsFromInventoryString = ingredientsFromInventoryString + arr[i] + ', ';
    //       }
    //     }
    //   }
    //   return ingredientsFromInventoryString;
    // }
    // prepIngredientsListForSpoonacular(foodArr);
    const ingredientsArr = arr.map((food: { item: any }) => food.item);
    const ingredientsString = ingredientsArr.join(', ');
    return ingredientsString;
  };

  const handleSubmitByInventory = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const ingredients: string = prepIngredientsListForSpoonacular(userAvailableInventory);
    fetch('/recipes-by-ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ listOfIngredients: ingredients }),
    })
      .then((r: any) => r.json())
      .then((r: any) => {
        setRecipeSearchResults(r);
      })
      .catch((err: any) => console.log({ Error: err, Status: err.status, Message: err.message }));
  };

  return (
    <>
      <div className="row row--align-center row--justify-center">
        <div className="card-demo margin-vert--md">
          <div className="card">
            <div className="col col--12">
              <h3 className="card--title">Search Recipes by Ingredients</h3>
              <div className="card__body">
                <input
                  className="form-input margin-bottom--md"
                  value={newFormEntry.listOfIngredients || ''}
                  type="text"
                  name="listOfIngredients"
                  placeholder="List ingredients with commas"
                  onChange={handleFormChange}
                />
                <button
                  type="button"
                  className="button button--outline button--primary"
                  onClick={handleFormSubmit}
                >
                  Submit Search
                </button>
                <button
                  type="button"
                  className="button button--outline button--primary"
                  onClick={(e) => handleSubmitByInventory(e)}
                >
                  Submit Inventory Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row--align-center row--justify-center">
        {recipeSearchResults.map((result) => (
          <span key={`test-recipe-key-${result.id}`}>{result.title}</span>
        ))}
      </div>
    </>
  );
};

export default RecipeSearch;
