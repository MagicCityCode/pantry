import React from "react";
import { useHistory } from "react-router";

export default function TestIpts() {
  const [name, setName] = React.useState<string>("");
  const [shelfLife, setShelfLife] = React.useState<string>("");
  const [shelfLifeUnit, setShelfLifeUnit] = React.useState<string>("");
  const [stg, setStg] = React.useState<string>("");
  const [uom, setUom] = React.useState<string>("");
  const history = useHistory();

  const handleNameIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleShelfLifeIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setShelfLife(e.target.value);
  const handleShelfLifeUnitIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setShelfLifeUnit(e.target.value);
  const handleStgIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setStg(e.target.value);
  const handleUomIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUom(e.target.value);
  const handleIngredientSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let newFormEntry = {
      name,
      shelfLife,
      shelfLifeUnit,
      stg,
      uom,
    };

    fetch("/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newFormEntry),
    })
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        history.push("/");
      });
  };

  return (
    <div className="row row--align-center row--justify-center">
      <div className="card-demo margin-vert--md">
        <div className="card">
          <div className="col col--4">
            <div className="card__body">
              <input
                className="form-input margin-bottom--md"
                value={name}
                type="text"
                placeholder="Name"
                onChange={handleNameIpt}
              />
              <input
                className="form-input margin-bottom--md"
                value={shelfLife}
                type="text"
                placeholder="Shelf life"
                onChange={handleShelfLifeIpt}
              />
              <input
                className="form-input margin-bottom--md"
                value={shelfLifeUnit}
                type="text"
                placeholder="Shelf life unit (e.g. days, weeks, years)"
                onChange={handleShelfLifeUnitIpt}
              />
              <input
                className="form-input margin-bottom--md"
                value={stg}
                type="text"
                placeholder="Storage type (e.g. refrigerator, pantry, freezer)"
                onChange={handleStgIpt}
              />
              <input
                className="form-input margin-bottom--md"
                value={uom}
                type="text"
                placeholder="Unit of measure (e.g. ounces, liters, pounds)"
                onChange={handleUomIpt}
              />
              <button
                className="button button--outline button--primary"
                onClick={handleIngredientSubmit}
              >
                Submit Ingredient
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
