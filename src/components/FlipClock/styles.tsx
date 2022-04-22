import styled from "styled-components";

export const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  line-height: 0;

  & * {
    user-select: none;
    cursor: default;
  }
`;

export const Clock = styled.div`
  display: flex;

  perspective: 1000px;
`;

export const Digit = styled.div`
  position: relative;

  width: 45px;
  height: 80px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-left: 2px;

  &::before,
  &::after {
    position: absolute;
    z-index: 0;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    width: 100%;
    height: 50%;
    overflow: hidden;

    background: white;
    color: black;
    background: linear-gradient(0, #aaa, #ccc, 30%, #fafafa);
  }

  &::before {
    content: attr(data-digit-before);

    bottom: 0;
    align-items: flex-start;

    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &::after {
    content: attr(data-digit-after);

    top: 0;
    align-items: flex-end;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const Card = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 50%;

  transform-style: preserve-3d;
  transform-origin: bottom;

  transform: rotateX(0);
  transition: transform 0.7s ease-in-out;

  border-radius: 4px;

  &.flipped {
    transform: rotateX(-180deg);
  }
`;
export const CardFrontFace = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  overflow: hidden;

  border-radius: 4px;
  background: white;
  color: black;

  align-items: flex-end;
  backface-visibility: hidden;

  &,
  ${Digit}::after {
    background: linear-gradient(0, #aaa, #ccc, 30%, #fafafa);
    border-bottom: 1.5px solid black;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
export const CardBackFace = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  overflow: hidden;

  border-radius: 4px;

  background: white;
  color: black;

  align-items: flex-start;
  transform: rotateX(-180deg);
  backface-visibility: hidden;

  &,
  ${Digit}::before {
    background: linear-gradient(0, #aaa, #ccc, 30%, #fafafa);
    border-top: 1.5px solid black;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const Colon = styled.div`
  font-size: 50px;
  margin: 0 6px;
`;
