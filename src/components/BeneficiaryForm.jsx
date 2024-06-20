import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faGlobe, faMapPin } from '@fortawesome/free-solid-svg-icons';

const countries = ['India', 'USA', 'Canada', 'UK', 'Germany', 'Australia'];

const BeneficiaryForm = ({ onSubmit, defaultValues = {} }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [formData, setFormData] = useState(null);

    const openConfirmation = (data) => {
        setFormData(data);
        setIsConfirmationOpen(true);
    };

    const closeConfirmation = () => {
        setIsConfirmationOpen(false);
    };

    const handleFinalSubmit = () => {
        onSubmit(formData);
        closeConfirmation();
    };

    return (
        <form onSubmit={handleSubmit(openConfirmation)} className="beneficiary-form">
            {
                !isConfirmationOpen ? (
                    <>
                        <div className="form-group">
                            <label><FontAwesomeIcon icon={faUser} /> Full Name</label>
                            <input {...register('fullName', { required: true })} />
                            {errors.fullName && <p className="error-message">This field is required</p>}
                        </div>
                        <div className="form-group">
                            <label><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</label>
                            <input {...register('address', { required: true })} />
                            {errors.address && <p className="error-message">This field is required</p>}
                        </div>
                        <div className="form-group">
                            <label><FontAwesomeIcon icon={faGlobe} /> Country</label>
                            <select {...register('country', { required: true })}>
                                {countries.map(country => <option key={country} value={country}>{country}</option>)}
                            </select>
                            {errors.country && <p className="error-message">This field is required</p>}
                        </div>
                        <div className="form-group">
                            <label><FontAwesomeIcon icon={faMapPin} /> Pincode</label>
                            <input {...register('pincode', { required: true })} />
                            {errors.pincode && <p className="error-message">This field is required</p>}
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </>
                ) : (
                    <>
                        <div className="confirmation-dialog">
                            <p>Confirm the provided information:</p>
                            <p><strong>Full Name:</strong> {formData.fullName}</p>
                            <p><strong>Address:</strong> {formData.address}</p>
                            <p><strong>Country:</strong> {formData.country}</p>
                            <p><strong>Pincode:</strong> {formData.pincode}</p>
                            <button onClick={handleFinalSubmit} className="confirm-button">Confirm</button>
                            <button onClick={closeConfirmation} className="cancel-button">Cancel</button>
                        </div>
                    </>
                )
            }
        </form>
    );
};

export default BeneficiaryForm;
