import {
  faCamera,
  faComment,
  faGear,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavBox, NavIcon, NavItem, NavText } from "./styles";
const Navbar: React.FC = () => {
  return (
    <>
      <NavBox>
        <NavItem>
          <a href="/">
            <NavIcon>
              <FontAwesomeIcon icon={faHouseChimney} />
            </NavIcon>
            <NavText>Home</NavText>
          </a>
        </NavItem>
        <NavItem>
          <a href="/">
            <NavIcon>
              <FontAwesomeIcon icon={faUser} />
            </NavIcon>
            <NavText>Profile</NavText>
          </a>
        </NavItem>
        <NavItem>
          <a href="/">
            <NavIcon>
              <FontAwesomeIcon icon={faComment} />
            </NavIcon>
            <NavText>Message</NavText>
          </a>
        </NavItem>
        <NavItem>
          <a href="/">
            <NavIcon>
              <FontAwesomeIcon icon={faCamera} />
            </NavIcon>
            <NavText>Photos</NavText>
          </a>
        </NavItem>
        <NavItem>
          <a href="/">
            <NavIcon>
              <FontAwesomeIcon icon={faGear} />
            </NavIcon>
            <NavText>Settings</NavText>
          </a>
        </NavItem>
      </NavBox>
    </>
  );
};

export default Navbar;
