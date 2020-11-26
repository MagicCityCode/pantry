import React from "react";

const Template: React.FC<TemplateProps> = (props) => {
  const [placeholder, setPlaceholder] = React.useState(null);

  React.useEffect(() => {}, []);

  return (
    <div>
      <h1>Template View Working</h1>
    </div>
  );
};

interface TemplateProps {}

export default Template;
