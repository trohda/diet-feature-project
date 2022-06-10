import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 100%;
  border-left: 1px solid rgb(240, 240, 240);
  text-transform: uppercase;
  font-size: 0.906rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  font-weight: 650;
  color: rgb(145, 145, 145);
  padding: 0 15px;
`;

export const StyledNavbarElementUnActive = styled.div`
  padding: 2px 12px 0 16px;
  text-shadow: 0px 0px 1px rgba(175, 175, 175, 0.8);
  p {
    transition: transform 0.25s ease-in;
  }

  p:hover {
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }
`;

export const StyledNavbarElementActive = styled.div`
  padding: 2px 15px 0 15px;
  color: rgb(255, 150, 42);
  position: relative;

  .underLine {
    width: 25px;
    height: 3px;
    border-bottom: 2px solid rgba(255, 150, 42, 0.6);
    position: absolute;
    top: 21px;
    left: 52px;
  }
`;
