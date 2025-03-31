import React from 'react';
import './FormInput.css';

const FormInput = ({ label, type, placeholder }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input type={type} placeholder={placeholder} className="input-field" />
    </div>
  );
};

export default FormInput;
