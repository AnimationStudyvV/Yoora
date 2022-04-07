import {
  faCamera,
  faComment,
  faGear,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { Highlight, NavBox, NavIcon, NavItem, NavText } from "./styles";
const Navbar: React.FC = () => {
  const [focus, setFocus] = useState(0);

  const onChangeFocus = (num: number) => {
    setFocus(num);
  };
  return (
    <>
      <NavBox>
        <NavItem
          className={focus === 0 ? "active" : ""}
          onClick={() => onChangeFocus(0)}
        >
          <NavIcon>
            <FontAwesomeIcon icon={faHouseChimney} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem
          className={focus === 1 ? "active" : ""}
          onClick={() => onChangeFocus(1)}
        >
          <NavIcon>
            <FontAwesomeIcon icon={faUser} />
          </NavIcon>
          <NavText>Profile</NavText>
        </NavItem>
        <NavItem
          className={focus === 2 ? "active" : ""}
          onClick={() => onChangeFocus(2)}
        >
          <NavIcon>
            <FontAwesomeIcon icon={faComment} />
          </NavIcon>
          <NavText>Message</NavText>
        </NavItem>
        <NavItem
          className={focus === 3 ? "active" : ""}
          onClick={() => onChangeFocus(3)}
        >
          <NavIcon>
            <FontAwesomeIcon icon={faCamera} />
          </NavIcon>
          <NavText>Photos</NavText>
        </NavItem>
        <NavItem
          className={focus === 4 ? "active" : ""}
          onClick={() => onChangeFocus(4)}
        >
          <NavIcon>
            <FontAwesomeIcon icon={faGear} />
          </NavIcon>
          <NavText>Settings</NavText>
        </NavItem>

        <Highlight />
      </NavBox>
    </>
  );
};

export default Navbar;
