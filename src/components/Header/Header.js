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
          <NavbarWrapper></NavbarWrapper>
          <LoggedUserWrapper></LoggedUserWrapper>
        </HeaderContentWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
