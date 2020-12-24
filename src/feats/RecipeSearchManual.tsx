import React, { useState } from 'react';
// import service from '../utils/api-service'; // Bring this back soon
import { ISpoonacularRecipe } from '../utils/types';

const RecipeSearchManual: React.FC = () => {
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

export default RecipeSearchManual;
