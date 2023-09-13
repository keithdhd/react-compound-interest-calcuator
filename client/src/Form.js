import React, { useState } from "react";
import BaseAmount from "./BaseAmount";
import AnnualInterest from "./AnnualInterest";
import TimePeriod from "./TimePeriod";
import CalculateButton from "./CalculateButton";

const Form = ({ calculateResult }) => {
  const [baseAmount, setBaseAmount] = useState(5000);
  const [annualInterest, setAnnualInterest] = useState(5);
  const [timePeriod, setTimePeriod] = useState(5);
  const [timePeriodErrors, setTimePeriodErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateResult(baseAmount, annualInterest, timePeriod, timePeriodErrors);
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

    if (Number(e.target.value) <= 0) {
      errors.push("Years to grow must be above zero.");
    }

    setTimePeriod(time);
    setTimePeriodErrors(errors);
  };

  const reset = () => {
    setBaseAmount("");
    setAnnualInterest("");
    setTimePeriod("");
    setTimePeriodErrors([]);
    calculateResult(0, 0, 0, 0);
  };

  return (
    <form id="calculator-form" className="ui huge form" onSubmit={handleSubmit}>
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
      <CalculateButton reset={reset} />
    </form>
  );
};

export default Form;
