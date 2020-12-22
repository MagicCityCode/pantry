import React from 'react';
import { useHistory } from 'react-router';
// import service from '../utils/api-service';

const TestInputs: React.FC = () => {
  const history = useHistory();
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
    fetch('/ingredients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormEntry),
    })
      .then((r: any) => r.json())
      .then((r: any) => {
        console.log(r);
      })
      .catch((err: any) => console.log({ Error: err, Status: err.status, Message: err.message }));
    history.push('/');
  };

  return (
    <div className="row row--align-center row--justify-center">
      <div className="card-demo margin-vert--md">
        <div className="card">
          <div className="col col--12">
            <h3 className="card--title">Submit New Ingredient</h3>
            <div className="card__body">
              <input
                className="form-input margin-bottom--md"
                value={newFormEntry.name || ''}
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleFormChange}
              />
              <input
                className="form-input margin-bottom--md"
                value={newFormEntry.shelfLife || ''}
                type="text"
                name="shelfLife"
                placeholder="Shelf life"
                onChange={handleFormChange}
              />
              <input
                className="form-input margin-bottom--md"
                value={newFormEntry.shelfLifeUnit || ''}
                type="text"
                name="shelfLifeUnit"
                placeholder="Shelf life unit (e.g. days, weeks, years)"
                onChange={handleFormChange}
              />
              <input
                className="form-input margin-bottom--md"
                value={newFormEntry.storageMethod || ''}
                type="text"
                name="storageMethod"
                placeholder="Storage method/location"
                onChange={handleFormChange}
              />
              <input
                className="form-input margin-bottom--md"
                value={newFormEntry.unitOfMeasure || ''}
                type="text"
                name="unitOfMeasure"
                placeholder="Unit of measure"
                onChange={handleFormChange}
              />
              <button
                type="button"
                className="button button--outline button--primary"
                onClick={handleFormSubmit}
              >
                Submit New Ingredient
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestInputs;
