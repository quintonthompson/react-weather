import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const ConditionState = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.2rem;
  `;
  const TempState = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 1.8rem;
    font-weight: 200;
  `;
  return (
    <>
      <ConditionState>Clouds</ConditionState>
      <TempState>20 °F</TempState>
    </>
  );
};

export default Condition;
