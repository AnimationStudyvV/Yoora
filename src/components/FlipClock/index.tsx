import React from "react";

import { Clock, ClockContainer, Digit } from "./styles";

const FlipClock: React.FC = () => {
  return (
    <ClockContainer>
      <Clock>
        <Digit prev="0" next="1"></Digit>
      </Clock>
    </ClockContainer>
  );
};

export default FlipClock;
