import React from "react";

const Result = ({ result }) => {
  return (
    <div className="ui icon message">
      <i className="money bill alternate outline icon" />
      <div className="content">
        <h1 id="result">
          {new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
          }).format(result)}
        </h1>
      </div>
    </div>
  );
};

export default Result;
