import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBeneficiary } from '../store/beneficiarySlice';
import BeneficiaryForm from '../components/BeneficiaryForm';
import { v4 as uuidv4 } from 'uuid';

const AddBeneficiary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(addBeneficiary({ id: uuidv4(), ...data }));
    navigate('/');
  };

  return (
    <div className="add-edit-beneficiary-container">
      <h2>Add New Beneficiary</h2>
      <BeneficiaryForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddBeneficiary;

