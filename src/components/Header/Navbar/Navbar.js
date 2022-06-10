import { StyledNavbar } from "../HeaderStyles/Navbar.styled";
import NavbarElement from "./NavbarElement";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavbarElement text={"Dashboard"} isActive={true} />
      <NavbarElement text={"Recipes"} isActive={false} />
      <NavbarElement text={"Challenge"} isActive={false} />
    </StyledNavbar>
  );
};

export default Navbar;
