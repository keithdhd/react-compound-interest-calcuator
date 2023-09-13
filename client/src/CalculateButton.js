import React from "react";

const CalculateButton = ({ reset }) => {
  return (
    <>
      <input
        type="reset"
        className="ui huge secondary submit button"
        id="reset"
        value="Reset"
        onClick={reset}
      />
      <input
        type="submit"
        className="ui huge primary submit button"
        id="save"
        value="Calculate"
      />
    </>
  );
};

export default CalculateButton;
