import * as React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader: React.FC = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    let showTimer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(showTimer);
  }, []);

  return (
    // <div className="d-flex justify-content-center align-items-center h-50"> Replace Bootstrap CSS w/ Infima here
    <div>
      {show && (
        <Spinner
          style={{ height: "100px", width: "100px" }}
          animation="border"
          variant="primary"
        />
      )}
    </div>
  );
};

// interface LoaderProps {}

export default Loader;
