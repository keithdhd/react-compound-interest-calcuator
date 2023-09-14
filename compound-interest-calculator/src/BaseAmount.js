import React from "react";

const BaseAmount = ({ value, handleBaseAmountChange }) => {
  return (
    <div className="field">
      <label htmlFor="baseAmount">Base Amount:</label>
      <input
        type="number"
        id="baseAmount"
        value={value}
        onChange={handleBaseAmountChange}
        placeholder={5000}
        autoFocus
        required
      />
    </div>
  );
};

export default BaseAmount;
