import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageBeneficiaries from './pages/ManageBeneficiaries';
import AddBeneficiary from './pages/AddBeneficiary';
import EditBeneficiary from './pages/EditBeneficiary';
import BeneficiaryDetail from './components/BeneficiaryDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManageBeneficiaries />} />
        <Route path="/add" element={<AddBeneficiary />} />
        <Route path="/edit/:id" element={<EditBeneficiary />} />
        <Route path="/view/:id" element={<BeneficiaryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
