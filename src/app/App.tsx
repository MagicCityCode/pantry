import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Div100vh from 'react-div-100vh';
import Foot from '../common/Foot';
import Nav from '../common/Nav';
import Routes from './Routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Div100vh>
      <Nav />
      <div className="container">
        <Routes />
      </div>
      <Foot />
    </Div100vh>
  </BrowserRouter>
);

export default App;
