import React, { useState, useEffect } from 'react';
// import service from '../utils/api-service'; // Bring this back soon
import { ISpoonacularRecipe } from '../utils/types';

const UserInventoryAndRecipeSearch: React.FC = () => {
  const [recipeSearchResults, setRecipeSearchResults] = useState<ISpoonacularRecipe[]>([]);

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
      .then((r: any) => setRecipeSearchResults(r))
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
                {/* Replace this button and its event handler with multiple useEffects that automatically load user's available inventory and potential recipes upon initial render */}
                <button
                  type="button"
                  className="button button--outline button--primary"
                  onClick={(e) => handleSubmitByInventory(e)}
                >
                  Search Recipes Using Inventory
                </button>
              </div>
            </div>
          </div>
          <br />
          <div className="card--title">
            PLACEHOLDER: DISPLAY CURRENT AVAILABLE INVENTORY OF USER HERE
          </div>
          {/* <ol>
            {userAvailableInventory.map((item) => (
              <>
                <br />
                For some reason, below key is being rejected as not unique and below JSX items are being rendered as undefined; revisit
                <li
                  key={`inventory-result-key-${item.Input_ID}-${item.Ingredient_ID}-${item.Unit_of_Measure}-${item.Quantity}`}
                >
                  {`${item.Item}, Quantity: ${item.Quantity}, Unit of measure: ${item.Unit_of_Measure}, Days till expiration: ${item.Days_Until_Expiration}`}
                </li>
              </>
            ))}
          </ol> */}
        </div>
      </div>
      <div className="row row--align-center row--justify-center">
        <div className="card--title">
          RECIPES FOR MEALS THAT CAN BE PREPARED USING YOUR AVAILABLE INVENTORY
        </div>
      </div>
      <div className="row row--align-center row--justify-center">
        <ol>
          {recipeSearchResults.map((result) => (
            <>
              <br />
              <li key={`test-recipe-key-${result.id}`}>{result.title}</li>
              {/* Pull in more info here */}
            </>
          ))}
        </ol>
      </div>
    </>
  );
};

export default UserInventoryAndRecipeSearch;
