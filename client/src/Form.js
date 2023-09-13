import React, { useState } from "react";
import BaseAmount from "./BaseAmount";
import AnnualInterest from "./AnnualInterest";
import TimePeriod from "./TimePeriod";
import CalculateButton from "./CalculateButton";

const Form = ({ fetchResult }) => {
  const [baseAmount, setBaseAmount] = useState("");
  const [annualInterest, setAnnualInterest] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [timePeriodErrors, setTimePeriodErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResult({
      baseAmount,
      annualInterest,
      timePeriod,
      timePeriodErrors,
    });
  };

  const handleBaseAmountChange = (e) => {
    setBaseAmount(e.target.value);
  };

  const handleInterestChange = (e) => {
    setAnnualInterest(e.target.value);
  };

  const handleTimePeriodChange = (e) => {
    const errors = [];
    const time = e.target.value;

    if (Number(e.target.value) === 0) {
      errors.push("Years to grow must be above zero.");
    }

    setTimePeriod(time);
    setTimePeriodErrors(errors);
  };

  return (
    <form id="calculator-form" className="ui form" onSubmit={handleSubmit}>
      <div className="three fields">
        <BaseAmount
          value={baseAmount}
          handleBaseAmountChange={handleBaseAmountChange}
        />
        <AnnualInterest
          value={annualInterest}
          handleInterestChange={handleInterestChange}
        />
        <TimePeriod
          value={timePeriod}
          errors={timePeriodErrors}
          handleTimePeriodChange={handleTimePeriodChange}
        />
      </div>
      <CalculateButton />
    </form>
  );
};

export default Form;
