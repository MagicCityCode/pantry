import React, { useState, useEffect } from 'react';
// import service from '../utils/api-service'; // Bring this back soon
import { ISpoonacularRecipe } from '../utils/types';

const UserInventoryAndRecipeSearch: React.FC = () => {
  const [recipeSearchResults, setRecipeSearchResults] = useState<ISpoonacularRecipe[]>([]);

  const [userAvailableInventory, setUserAvailableInventory] = useState<any[]>([]);
  const userId = 1; // Replace this w/ authenticated user's ID
  useEffect(() => {
    fetch(`/available-inventory-with-expiration/${userId}`, {
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
          <ul>
            {userAvailableInventory.map((item) => (
              <>
                <br />
                <li
                  // key={`${item.input_id.toString()}-${item.ingredient_id.toString()}-${item.unit_of_measure.toString()}-${item.quantity.toString()}-${item.days_until_expiration.toString()}`}
                  key={userAvailableInventory[item]}
                >
                  <div className="card-demo">
                    <div className="card">
                      <div className="card__header">
                        <h3>{`${item.item}`}</h3>
                      </div>
                      <div className="card__body">
                        <p>{`Quantity: ${item.quantity}`}</p>
                        <p>{`Unit of measure: ${item.unit_of_measure}`}</p>
                      </div>
                      <div className="card__footer">
                        <span className="">{`Days till expiration: ${item.days_until_expiration}`}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <div className="row row--align-center row--justify-center">
        <div className="card--title">Recipes you can make from your inventory</div>
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
