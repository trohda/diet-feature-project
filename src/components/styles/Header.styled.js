import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  background-color: white;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 82px;
  z-index: 188;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeaderContentWrapper = styled.div`
  min-width: 1024px;
  border: 1px solid black;
  padding: 0 23px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  background: lightgrey;
`;

export const LoggedUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  height: 100%;

  background: lightgreen;
`;
