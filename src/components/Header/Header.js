import Navbar from "./Navbar/Navbar";
import {
  StyledHeader,
  HeaderContentWrapper,
  NavbarWrapper,
  LoggedUserWrapper,
} from "../styles/Header.styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContentWrapper>
          <NavbarWrapper>
            <Navbar />
          </NavbarWrapper>
          <LoggedUserWrapper></LoggedUserWrapper>
        </HeaderContentWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
