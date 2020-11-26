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
    <div>
      <form>
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={handleNameIpt}
        />
        <br />
        <input
          value={type}
          type="text"
          placeholder="Type"
          onChange={handleTypeIpt}
        />
        <br />
        <input
          value={grp}
          type="text"
          placeholder="Group"
          onChange={handleGrpIpt}
        />
        <br />
        <input
          value={fam}
          type="text"
          placeholder="Family"
          onChange={handleFamIpt}
        />
        <br />
        <input
          value={category}
          type="text"
          placeholder="Category"
          onChange={handleCategoryIpt}
        />
        <br />
        <input
          value={color}
          type="text"
          placeholder="Color"
          onChange={handleColorIpt}
        />
        <br />
        <button onClick={handleFoodItemSubmit}>Submit Test Food</button>
      </form>
    </div>
  );
}
