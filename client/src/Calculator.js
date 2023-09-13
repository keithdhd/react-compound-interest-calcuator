import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Result from "./Result";
import RequestHelper from "./helpers/request_helper";

const Calculator = () => {
  const [result, setResult] = useState(null);

  const fetchResult = (data) => {
    const request = new RequestHelper(
      "http://localhost:9000/api/results/compound"
    );

    const createPayload = (obj) => {
      return {
        baseAmount: Number(obj.baseAmount),
        annualInterest: Number(obj.annualInterest),
        calculationPeriod: Number(obj.timePeriod),
      };
    };

    const payload = createPayload(data);

    request.post(payload).then((res) => {
      setResult({ result: res });
    });
  };

  return (
    <Wrapper>
      <Form fetchResult={fetchResult} />
      <Result result={result} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

export default Calculator;
