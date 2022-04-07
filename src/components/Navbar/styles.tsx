import styled from "styled-components";

export const NavBox = styled.ul`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-around;
`;
export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const NavIcon = styled.span`
  transform: translateY(0px);
  transition: 0.5s;
  ${NavItem}:hover & {
    transform: translateY(-30px);
  }
`;
export const NavText = styled.span`
  opacity: 0;
  transform: translateY(20px);
  transition: 0.5s;
  font-size: 0.8em
  letter-spacing: 0.05em;
  ${NavItem}:hover & {
    opacity: 1;
    transform: translateY(5px);
  }
`;
