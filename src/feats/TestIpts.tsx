import React from "react";
import { useHistory } from "react-router";

export default function TestIpts() {
  const [name, setName] = React.useState<string>("");
  const [type, setType] = React.useState<string>("");
  const [grp, setGrp] = React.useState<string>("");
  const [fam, setFam] = React.useState<string>("");
  const [category, setCategory] = React.useState<string>("");
  const [color, setColor] = React.useState<string>("");

  const history = useHistory();

  const handleNameIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleTypeIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setType(e.target.value);
  const handleGrpIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setGrp(e.target.value);
  const handleFamIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFam(e.target.value);
  const handleCategoryIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCategory(e.target.value);
  const handleColorIpt = (e: React.ChangeEvent<HTMLInputElement>) =>
    setColor(e.target.value);
  const handleFoodItemSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let newFormEntry = {
      name,
      type,
      grp,
      fam,
      category,
      color,
    };

    fetch("/foods", {
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
                value={type}
                type="text"
                placeholder="Type"
                onChange={handleTypeIpt}
              />
              <input
                className="form-input margin-bottom--md"
                value={grp}
                type="text"
                placeholder="Group"
                onChange={handleGrpIpt}
              />
              <input
                className="form-input margin-bottom--md"
                value={fam}
                type="text"
                placeholder="Family"
                onChange={handleFamIpt}
              />
              <input
                className="form-input margin-bottom--md"
                value={category}
                type="text"
                placeholder="Category"
                onChange={handleCategoryIpt}
              />
              <input
                className="form-input margin-bottom--md"
                value={color}
                type="text"
                placeholder="Color"
                onChange={handleColorIpt}
              />
              <button
                className="button button--outline button--primary"
                onClick={handleFoodItemSubmit}
              >
                Submit Test Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
