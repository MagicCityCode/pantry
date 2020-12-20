import React, { useState } from 'react';
import service from '../utils/api-service';
// import { ISpoonacularRecipe } from '../utils/types';

const RecipeSearch: React.FC = () => {
  const [newFormEntry, setNewFormEntry] = useState<{ [key: string]: string }>({});
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setNewFormEntry((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   service.handleFetch('/recipes-by-ingredients', 'POST', newFormEntry);
  // };

  // const [recipeSearchResults, setRecipeSearchResults] = useState<ISpoonacularRecipe[]>([]);

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    service.handleFetch('/recipes-by-ingredients', 'POST', newFormEntry);
  };

  // Need to somehow get the recipe search submit response results into my useEffect to set state here to recipeSearchResults
  // useEffect(() => {
  //   (async () => {
  //     const resRecipes: any = await service.handleFetch('/api/reviews', 'GET');
  //     setRecipeSearchResults(resRecipes);
  //   })();
  // }, []);

  // const userId =
  // const [userAvailableInventory, setUserAvailableInventory] = useState<
  //   IUserInventory[]
  // >([]);
  // useEffect(() => {
  //   (async () => {
  //     const resUserAvailableInventory = await service.handleFetch(`/api/available-inventory/${userId}`, 'GET');
  //     setUserAvailableInventory(resUserAvailableInventory);
  //   })();
  // }, []);
  // const handleFormSubmitByInventory = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   service.handleFetch('/recipes-by-ingredients', 'POST', userAvailableInventory);
  // };

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
                {/* <button
                type="button"
                className="button button--outline button--primary"
                onClick={handleFormSubmitByInventory}
                >
                Submit Inventory Search
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row row--align-center row--justify-center">
        <div>
          <RecipeCards /> Pass props into this
        </div>
      </div> */}
    </>
  );
};

export default RecipeSearch;
