import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const beneficiarySlice = createSlice({
  name: 'beneficiaries',
  initialState,
  reducers: {
    addBeneficiary(state, action) {
      state.list.push(action.payload);
    },
    updateBeneficiary(state, action) {
      const { id, fullName, address, country, pincode } = action.payload;
      const existingBeneficiary = state.list.find(b => b.id === id);
      if (existingBeneficiary) {
        existingBeneficiary.fullName = fullName;
        existingBeneficiary.address = address;
        existingBeneficiary.country = country;
        existingBeneficiary.pincode = pincode;
      }
    },
    removeBeneficiary(state, action) {
      state.list = state.list.filter(b => b.id !== action.payload);
    }
  }
});

export const { addBeneficiary, updateBeneficiary, removeBeneficiary } = beneficiarySlice.actions;
export default beneficiarySlice.reducer;
