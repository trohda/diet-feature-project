import {
  StyledHeader,
  HeaderContentWrapper,
  NavbarWrapper,
  LoggedUserWrapper,
} from "./HeaderStyles/Header.styled";
import Navbar from "./Navbar/Navbar";
import LoggedUser from "./LoggedUser/LoggedUser";
import OliviaAvatar from "../../img/avatars/OliviaAvatar.png";
import { useState } from "react";

const Header = () => {
  const [userName, setUsername] = useState("Olivia Wilde");
  const [userAvatar, setUserAvatar] = useState(OliviaAvatar);

  return (
    <>
      <StyledHeader>
        <HeaderContentWrapper>
          <NavbarWrapper>
            <Navbar />
          </NavbarWrapper>
          <LoggedUserWrapper>
            <LoggedUser user={userName} userAvatar={userAvatar} />
          </LoggedUserWrapper>
        </HeaderContentWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
