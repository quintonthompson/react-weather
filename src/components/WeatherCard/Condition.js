import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, condition }) => {
  return (
    <>
      <Reel theme={reelType} text={`${temp} °C`} />
      <ConditionState>{condition}</ConditionState>
    </>
  );
};

export default Condition;

const reelType = {
  group: {
    transitionDelay: "0ms",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0, 0)",
    height: "1.5em",
  },

  number: {
    fontFamily: "Fira Sans",
    height: "1em",
  },

  reel: {
    height: "1em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",

    /** CUSTOMISE BELOW */
    fontSize: "25px",
    fontWeight: "300",
    color: "white",
    lineHeight: "0.95em" /* adjusted for Lato font */,
  },
};
const ConditionState = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 1.2rem;
`;
