import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const BeneficiaryDetail = () => {
  const { id } = useParams();
  const beneficiary = useSelector(state => state.beneficiaries.list.find(b => b.id === id));

  if (!beneficiary) {
    return <div>Beneficiary not found</div>;
  }

  return (
    <div>
      <h2>{beneficiary.fullName}</h2>
      <p>Address: {beneficiary.address}</p>
      <p>Country: {beneficiary.country}</p>
      <p>Pincode: {beneficiary.pincode}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
};

export default BeneficiaryDetail;
