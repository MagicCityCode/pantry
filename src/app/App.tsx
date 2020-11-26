import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../feats/Nav";
import Routes from "./Routes";

const App: React.FC<{}> = () => (
  <BrowserRouter>
    <Nav />
    <Routes />
  </BrowserRouter>
);

export default App;
