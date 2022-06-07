import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  background-color: white;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80px;
  z-index: 188;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const HeaderContentWrapper = styled.div`
  min-width: 1024px;

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
`;

export const LoggedUserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  height: 100%;

  background: lightgreen;
`;
