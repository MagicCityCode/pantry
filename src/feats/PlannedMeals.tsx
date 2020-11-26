import React from "react";

const PlannedMeals: React.FC<PlannedMealsProps> = (props) => {
  const [placeholder, setPlaceholder] = React.useState(null);

  React.useEffect(() => {}, []);

  return (
    <div>
      <h1>PlannedMeals View Working</h1>
    </div>
  );
};

interface PlannedMealsProps {}

export default PlannedMeals;
