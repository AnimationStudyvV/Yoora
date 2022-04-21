import { Link } from "react-router-dom";

import { Container, Nav, NavLink, Profile } from "./styles";

const Navigation: React.FC = () => {
  return (
    <>
      <Container>
        <Profile>animation - yoorabaek</Profile>
        <Nav>
          <NavLink>
            <Link to="/">Navbar</Link>
          </NavLink>
          <NavLink>
            <Link to="/clock">FlipClock</Link>
          </NavLink>
        </Nav>
      </Container>
    </>
  );
};

export default Navigation;
