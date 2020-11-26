import React from "react";

const InventoryProfile: React.FC<InventoryProfileProps> = (props) => {
  const [placeholder, setPlaceholder] = React.useState(null);

  React.useEffect(() => {}, []);

  return (
    <div>
      <h1>InventoryProfile View Working</h1>
    </div>
  );
};

interface InventoryProfileProps {}

export default InventoryProfile;
