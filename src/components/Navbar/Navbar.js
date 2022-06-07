import { StyledNavbar } from "../styles/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          DASHBOARD
          <div className="underLine"></div>
        </li>
        <li>RECIPES</li>
        <li>CHALLENGE</li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
