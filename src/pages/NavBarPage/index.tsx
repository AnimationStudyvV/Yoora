import Navbar from "../../components/Navbar";
import { Container, Navigation } from "./styles";

const NavbarPage: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <Navbar />
      </Navigation>
    </Container>
  );
};

export default NavbarPage;
