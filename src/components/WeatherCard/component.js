import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";
import { motion } from "framer-motion";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let highColor = 0;
  let lowColor = 0;
  let backGround = null;

  if (temp > 69) {
    highColor = (1 - (temp - 61) / 39) * 255;
    lowColor = highColor - 200;
    backGround = `linear-gradient(
        to bottom,
        rgba(255, ${highColor}, 0),
        rgb(255, ${Math.abs(lowColor)}, 0)
      )`;
  } else if (temp <= 69) {
    highColor = ((temp - 32) / 37) * 255;
    lowColor = highColor - 200;
    backGround = `linear-gradient(
        to bottom,
        rgba(0, ${highColor}, 255),
        rgb(0, ${Math.abs(lowColor)}, 255)
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
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location country={country} getWeather={getWeather} city={city} />
        <Icon condition={condition} />
        <Condition condition={condition} temp={temp} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
