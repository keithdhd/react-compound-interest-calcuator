import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Result from "./Result";
import calculateCompoundInterest from "./lib/calculator";

const Calculator = () => {
  const [result, setResult] = useState(0);

  const calculateResult = (baseAmount, annualInterest, timePeriod) => {
    const res = calculateCompoundInterest(
      Number(baseAmount),
      Number(annualInterest),
      Number(timePeriod)
    );

    setResult(res);
  };

  return (
    <Wrapper>
      <h1>Compound Interest Calculator</h1>
      <hr />
      <Form calculateResult={calculateResult} />
      <Result result={result} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 450px;
  margin: 40px auto;
  padding: 20px;

  background-color: #e6e6e6;

  border-radius: 5px;
`;

export default Calculator;
