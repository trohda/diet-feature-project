import {
  StyledNavbarElementUnActive,
  StyledNavbarElementActive,
} from "../styles/Navbar.styled";

const NavbarElement = ({ text, isActive }) => {
  return (
    <>
      {isActive ? (
        <StyledNavbarElementActive>
          {text} <div className="underLine"></div>
        </StyledNavbarElementActive>
      ) : (
        <StyledNavbarElementUnActive>{text}</StyledNavbarElementUnActive>
      )}
    </>
  );
};

export default NavbarElement;
