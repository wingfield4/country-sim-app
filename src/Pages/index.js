import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom';

import Home from './Home';
import Simulation from './Simulation';

const Pages = () => {
  return (
    <Routes>
      <Route exact path="/simulation" element={<Simulation />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default Pages;
