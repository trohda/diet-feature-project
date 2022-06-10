import {
  StyledNavbarElementUnActive,
  StyledNavbarElementActive,
} from "../HeaderStyles/Navbar.styled";

const NavbarElement = ({ text, isActive }) => {
  return (
    <>
      {isActive ? (
        <StyledNavbarElementActive>
          {text} <div className="underLine"></div>
        </StyledNavbarElementActive>
      ) : (
        <StyledNavbarElementUnActive>
          <p>{text}</p>
        </StyledNavbarElementUnActive>
      )}
    </>
  );
};

export default NavbarElement;
