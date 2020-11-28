import React from "react";

const Foot: React.FC = () => {
  return (
    <footer className="footer footer--dark">
      <div className="container container--fluid">
        <div className="footer__links">
          {/* <span className="footer__link-separator">·</span> */}
          <a
            className="footer__link-item"
            href="https://github.com/MagicCityCode"
          >
            GitHub
          </a>
        </div>
        <div>PantryBoss</div>
      </div>
    </footer>
  );
};

export default Foot;
