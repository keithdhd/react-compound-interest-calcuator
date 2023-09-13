import React from "react";

const TimePeriod = ({ errors, value, handleTimePeriodChange }) => {
  const errorMessages = errors.map((error, index) => {
    return (
      <div key={index} className="ui error visible message">
        {error}
      </div>
    );
  });

  return (
    <div className="field">
      <label htmlFor="timePeriod">Years to grow:</label>
      <input
        type="number"
        min="1"
        id="timePeriod"
        value={value}
        onChange={handleTimePeriodChange}
        placeholder={5}
        required
      />
      {errorMessages}
    </div>
  );
};

export default TimePeriod;
