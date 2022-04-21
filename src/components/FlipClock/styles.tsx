import styled from "styled-components";

export const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 44px;
`;

export const Clock = styled.div``;

export const Digit = styled.div.attrs(
  (props: { prev: string; next: string }) => props
)`
  position: relative;
  width: 40px;
  height: 75px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);

  &::before,
  &::after {
    position: absolute;
    z-index: 0;
    display: flex;
    justify-content: center;

    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  &::before {
    content: attr(${(props) => `${props.prev}`});
  }

  &::after {
    content: attr(${(props) => `${props.next}`});
  }
`;
