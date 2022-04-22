import React, { useState } from "react";

import {
  Card,
  CardBackFace,
  CardFrontFace,
  Clock,
  ClockContainer,
  Colon,
  Digit,
} from "./styles";

type Time = number | string;
interface TimeSet {
  h: Time;
  m: Time;
  s: Time;
  h0?: Time;
  h1?: Time;
  m0?: Time;
  m1?: Time;
  s0?: Time;
  s1?: Time;
}

const FlipClock: React.FC = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);
  const [isFlipped4, setIsFlipped4] = useState(false);
  const [isFlipped5, setIsFlipped5] = useState(false);
  const [isFlipped6, setIsFlipped6] = useState(false);

  const [timeSet, setTimeSet] = useState({
    h0: "",
    h1: "",
    m0: "",
    m1: "",
    s0: "",
    s1: "",
  });

  const runClock: () => void = () => {
    const date = new Date();
    const now: TimeSet = {
      h: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
    };

    now.h = now.h < 10 ? `0${now.h}` : `${now.h}`;
    now.m = now.m < 10 ? `0${now.m}` : `${now.m}`;
    now.s = now.s < 10 ? `0${now.s}` : `${now.s}`;

    now.h0 = now.h[0];
    now.h1 = now.h[1];
    now.m0 = now.m[0];
    now.m1 = now.m[1];
    now.s0 = now.s[0];
    now.s1 = now.s[1];

    const newTimeSet = { ...timeSet };
    // 이전이랑 다른지 비교하는 로직
    if (timeSet.h0 !== now.h0) {
      newTimeSet.h0 = now.h0;
      // setIsFlipped1(!isFlipped1);
    }
    if (timeSet.h1 !== now.h1) {
      newTimeSet.h1 = now.h1;
      // setIsFlipped2(!isFlipped2);
    }
    if (timeSet.m0 !== now.m0) {
      newTimeSet.m0 = now.m0;
      // setIsFlipped3(!isFlipped3);
    }
    if (timeSet.m1 !== now.m1) {
      newTimeSet.m1 = now.m1;
      // setIsFlipped4(!isFlipped4);
    }
    if (timeSet.s0 !== now.s0) {
      newTimeSet.s0 = now.s0;
      // setIsFlipped5(!isFlipped5);
    }
    if (timeSet.s1 !== now.s1) {
      newTimeSet.s1 = now.s1;
      // setIsFlipped6(!isFlipped6);
    }

    // setTimeSet(newTimeSet);

    console.log(`${now.h0}${now.h1}:${now.m0}${now.m1}:${now.s0}${now.s1}`);

    setTimeout(runClock, 1000);
  };

  runClock();

  return (
    <ClockContainer>
      <Clock className="clock-h">
        <Digit
          className="digit-left"
          data-digit-before="0"
          data-digit-after="1"
        >
          <Card className={isFlipped1 ? "flipped" : ""}>
            <CardFrontFace>0</CardFrontFace>
            <CardBackFace>1</CardBackFace>
          </Card>
        </Digit>
        <Digit
          className="digit-right"
          data-digit-before="0"
          data-digit-after="1"
        >
          <Card className={isFlipped2 ? "flipped" : ""}>
            <CardFrontFace>0</CardFrontFace>
            <CardBackFace>1</CardBackFace>
          </Card>
        </Digit>
      </Clock>
      <Colon>:</Colon>
      <Clock className="clock-m">
        <Digit
          className="digit-left"
          data-digit-before="0"
          data-digit-after="1"
        >
          <Card className={isFlipped3 ? "flipped" : ""}>
            <CardFrontFace>0</CardFrontFace>
            <CardBackFace>1</CardBackFace>
          </Card>
        </Digit>
        <Digit
          className="digit-right"
          data-digit-before="0"
          data-digit-after="1"
        >
          <Card className={isFlipped4 ? "flipped" : ""}>
            <CardFrontFace>0</CardFrontFace>
            <CardBackFace>1</CardBackFace>
          </Card>
        </Digit>
      </Clock>
      <Colon>:</Colon>
      <Clock className="clock-s">
        <Digit
          className="digit-left"
          data-digit-before="0"
          data-digit-after="1"
        >
          <Card className={isFlipped5 ? "flipped" : ""}>
            <CardFrontFace>0</CardFrontFace>
            <CardBackFace>1</CardBackFace>
          </Card>
        </Digit>
        <Digit
          className="digit-right"
          data-digit-before="0"
          data-digit-after="1"
        >
          <Card className={isFlipped6 ? "flipped" : ""}>
            <CardFrontFace>0</CardFrontFace>
            <CardBackFace>1</CardBackFace>
          </Card>
        </Digit>
      </Clock>
    </ClockContainer>
  );
};

export default FlipClock;
