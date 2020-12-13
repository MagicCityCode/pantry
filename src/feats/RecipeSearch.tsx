import React from 'react';
import service from '../utils/api-service';

const RecipeSearch: React.FC = () => {
  const [newFormEntry, setNewFormEntry] = React.useState<{ [key: string]: string }>({});
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setNewFormEntry((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    service.handleFetch('/recipes-by-ingredients', 'POST', newFormEntry);
  };

  return (
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
  );
};

export default RecipeSearch;
