import React, { useState } from "react";

import {
  Card,
  CardBackFace,
  CardFrontFace,
  Clock,
  ClockContainer,
  Digit,
} from "./styles";

const FlipClock: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ClockContainer>
      <Clock>
        <Digit data-digit-before="0" data-digit-after="1">
          <Card
            className={isFlipped ? "flipped" : ""}
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            <CardFrontFace>0</CardFrontFace>
            <CardBackFace>1</CardBackFace>
          </Card>
        </Digit>
        <Digit data-digit-before="0" data-digit-after="1">
          <Card
            className={isFlipped ? "flipped" : ""}
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            <CardFrontFace>0</CardFrontFace>
            <CardBackFace>1</CardBackFace>
          </Card>
        </Digit>
      </Clock>
    </ClockContainer>
  );
};

export default FlipClock;
