import React from 'react';
import { Link } from 'react-router-dom';
import BeneficiaryList from '../components/BeneficiaryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'; // Example icon

import '../App.css'; // Ensure CSS is imported

const ManageBeneficiaries = () => {
  return (
    <div>
      <div className="manage-beneficiaries-heading">
        <div>
          <FontAwesomeIcon icon={faUserFriends} className="logo-icon" />
          <span>Manage Beneficiaries</span>
        </div>
      </div>
      <div>
        <Link to="/add">
          <button className="add-beneficiary-button">Add Beneficiary</button>
        </Link>
      </div>
      <BeneficiaryList />
    </div>
  );
};

export default ManageBeneficiaries;
