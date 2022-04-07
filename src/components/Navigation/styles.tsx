import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 44px;
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  margin-right: 80px;
  font-size: 1.2em;
  font-weight: 500;
`;
export const Nav = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 36px;
`;
export const NavLink = styled.li`
  &:hover {
    color: #eee;
  }
`;
