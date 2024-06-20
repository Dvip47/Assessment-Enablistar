import React from 'react';

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div>
      <p>Are you sure you want to remove this beneficiary?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default ConfirmationModal;
