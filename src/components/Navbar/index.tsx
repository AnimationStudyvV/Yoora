import {
  faCamera,
  faComment,
  faGear,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Highlight, NavBox, NavIcon, NavItem, NavText } from "./styles";
const Navbar: React.FC = () => {
  return (
    <>
      <NavBox>
        <Highlight />
        <NavItem className="active">
          <NavIcon>
            <FontAwesomeIcon icon={faHouseChimney} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem>
          <NavIcon>
            <FontAwesomeIcon icon={faUser} />
          </NavIcon>
          <NavText>Profile</NavText>
        </NavItem>
        <NavItem>
          <NavIcon>
            <FontAwesomeIcon icon={faComment} />
          </NavIcon>
          <NavText>Message</NavText>
        </NavItem>
        <NavItem>
          <NavIcon>
            <FontAwesomeIcon icon={faCamera} />
          </NavIcon>
          <NavText>Photos</NavText>
        </NavItem>
        <NavItem>
          <NavIcon>
            <FontAwesomeIcon icon={faGear} />
          </NavIcon>
          <NavText>Settings</NavText>
        </NavItem>
      </NavBox>
    </>
  );
};

export default Navbar;
