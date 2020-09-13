import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";

const WeatherCard = (props) => {
  let highColor = 0;
  let lowColor = 0;
  let backGround = null;

  if (props.temp > 69) {
    highColor = (1 - (props.temp - 61) / 39) * 255;
    lowColor = highColor + 150;
    backGround = `linear-gradient(
        to bottom,
        rgba(255, ${highColor}, 0),
        rgb(255, ${lowColor}, 0)
      )`;
  } else if (props.temp <= 69) {
    highColor = ((props.temp - 32) / 37) * 255;
    lowColor = highColor + 150;
    backGround = `linear-gradient(
        to bottom,
        rgba(0, ${highColor}, 255),
        rgb(0, ${lowColor}, 255)
      )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${backGround};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
