import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import WashingMachineRepair from './pages/WashingMachineRepair';
import DryerRepair from './pages/DryerRepair';
import CoffeeMachineRepair from './pages/CoffeeMachineRepair';
import DishwasherRepair from './pages/DishwasherRepair';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/remont-stiralnyh-mashin-bosch" element={<WashingMachineRepair />} />
          <Route path="/remont-sushilnyh-mashin-bosch" element={<DryerRepair />} />
          <Route path="/remont-kofemashin-bosch" element={<CoffeeMachineRepair />} />
          <Route path="/remont-posudomoechnyh-mashin-bosch" element={<DishwasherRepair />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;