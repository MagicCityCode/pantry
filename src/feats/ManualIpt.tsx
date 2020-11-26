// Copy over from TestIpts
import React from "react";

const ManualInventoryIpt: React.FC<ManualInventoryIptProps> = (props) => {
  const [placeholder, setPlaceholder] = React.useState(null);

  React.useEffect(() => {}, []);

  return (
    <div>
      <h1>ManualInventoryIpt View Working</h1>
    </div>
  );
};

interface ManualInventoryIptProps {}

export default ManualInventoryIpt;
