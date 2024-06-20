import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBeneficiary } from '../store/beneficiarySlice';
import BeneficiaryForm from '../components/BeneficiaryForm';
import { toast } from 'react-toastify';

const EditBeneficiary = () => {
  const { id } = useParams();
  const beneficiary = useSelector(state => state.beneficiaries.list.find(b => b.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!beneficiary) {
    return <div>Beneficiary not found</div>;
  }

  const onSubmit = (data) => {
    dispatch(updateBeneficiary({ id, ...data }));
    navigate('/');
    toast.success('Beneficiary information edited successfully!', {
      position: 'top-right'
    });
  };

  return (
    <div className="add-edit-beneficiary-container">
      <h2>Edit Beneficiary</h2>
      <BeneficiaryForm onSubmit={onSubmit} defaultValues={beneficiary} />
    </div>
  );
};

export default EditBeneficiary;
