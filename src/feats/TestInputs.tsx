import React from 'react';
import { useHistory } from 'react-router';

export default function TestInputs() {
  const [newIngredientFormEntry, setNewIngredientFormEntry] = React.useState<{
    [key: string]: string;
  }>({});
  const handleNewIngredientFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setNewIngredientFormEntry((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const history = useHistory();
  const handleNewIngredientFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch('/ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newIngredientFormEntry),
    })
      .then((r) => r.json())
      .then(() => {
        history.push('/');
      });
  };
  const [
    newRecipeSearchByIngredientsFormEntry,
    setNewRecipeSearchByIngredientsFormEntry,
  ] = React.useState<{ [key: string]: string }>({});
  const handleRecipeSearchByIngredientsFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setNewRecipeSearchByIngredientsFormEntry((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleRecipeSearchByIngredientsFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch('/recipes-by-ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(newRecipeSearchByIngredientsFormEntry),
    })
      .then((r) => r.json())
      .then(() => {
        history.push('/');
      });
  };

  return (
    <>
      <div className="row row--align-center row--justify-center">
        <div className="card-demo margin-vert--md">
          <div className="card">
            <div className="col col--12">
              <h3 className="card--title">Submit New Ingredient</h3>
              <div className="card__body">
                <input
                  className="form-input margin-bottom--md"
                  value={newIngredientFormEntry.name || ''}
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleNewIngredientFormChange}
                />
                <input
                  className="form-input margin-bottom--md"
                  value={newIngredientFormEntry.shelfLife || ''}
                  type="text"
                  name="shelfLife"
                  placeholder="Shelf life"
                  onChange={handleNewIngredientFormChange}
                />
                <input
                  className="form-input margin-bottom--md"
                  value={newIngredientFormEntry.shelfLifeUnit || ''}
                  type="text"
                  name="shelfLifeUnit"
                  placeholder="Shelf life unit (e.g. days, weeks, years)"
                  onChange={handleNewIngredientFormChange}
                />
                <input
                  className="form-input margin-bottom--md"
                  value={newIngredientFormEntry.storageMethod || ''}
                  type="text"
                  name="storageMethod"
                  placeholder="Storage method/location"
                  onChange={handleNewIngredientFormChange}
                />
                <input
                  className="form-input margin-bottom--md"
                  value={newIngredientFormEntry.unitOfMeasure || ''}
                  type="text"
                  name="unitOfMeasure"
                  placeholder="Unit of measure"
                  onChange={handleNewIngredientFormChange}
                />
                <button
                  type="button"
                  className="button button--outline button--primary"
                  onClick={handleNewIngredientFormSubmit}
                >
                  Submit New Ingredient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row--align-center row--justify-center">
        <div className="card-demo margin-vert--md">
          <div className="card">
            <div className="col col--12">
              <h3 className="card--title">Search Recipes by Ingredients</h3>
              <div className="card__body">
                <input
                  className="form-input margin-bottom--md"
                  value={newRecipeSearchByIngredientsFormEntry.listOfIngredients || ''}
                  type="text"
                  name="listOfIngredients"
                  placeholder="List ingredients with commas"
                  onChange={handleRecipeSearchByIngredientsFormChange}
                />
                <button
                  type="button"
                  className="button button--outline button--primary"
                  onClick={handleRecipeSearchByIngredientsFormSubmit}
                >
                  Submit Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
