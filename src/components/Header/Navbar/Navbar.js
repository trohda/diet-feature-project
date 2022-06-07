import { StyledNavbar } from "../../styles/Navbar.styled";
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
/* <ul>
        <li>
          DASHBOARD
          <div className="underLine"></div>
        </li>
        <li>RECIPES</li>
        <li>CHALLENGE</li>
      </ul> */
