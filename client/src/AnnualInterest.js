import React from "react";

function AnnualInterest({ value, handleInterestChange }) {
  return (
    <div className="field">
      <label htmlFor="annualInterest">Annual Interest (%):</label>
      <input
        type="number"
        id="annualInterest"
        value={value}
        onChange={handleInterestChange}
      />
    </div>
  );
}

export default AnnualInterest;
