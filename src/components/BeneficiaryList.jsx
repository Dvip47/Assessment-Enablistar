import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBeneficiary } from '../store/beneficiarySlice';
import { Link } from 'react-router-dom';

const BeneficiaryList = () => {
  const beneficiaries = useSelector(state => state.beneficiaries.list);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBeneficiary(id));
  };

  return (
    <table className="beneficiary-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Address</th>
          <th>Country</th>
          <th>Pincode</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {beneficiaries.length==0 &&
        <tr>
        <td colSpan={6}>
        <p className='no-data'>No Record Found</p>
        </td>
        </tr>
        }
        {beneficiaries.map((beneficiary, index) => (
          <tr key={beneficiary.id}>
            <td>{index + 1}</td>
            <td>{beneficiary.fullName}</td>
            <td>{beneficiary.address}</td>
            <td>{beneficiary.country}</td>
            <td>{beneficiary.pincode}</td>
            <td>
              <Link to={`/edit/${beneficiary.id}`}>
                <button className="edit-button">
                  <i className="fa fa-edit"></i>
                </button>
              </Link>
              <button 
                className="delete-button" 
                onClick={() => handleDelete(beneficiary.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BeneficiaryList;
