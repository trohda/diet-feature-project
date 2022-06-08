import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: white;
  width: 100%;
  height: 79px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 0px;
`;

export const HeaderContentWrapper = styled.div`
  width: 1024px;
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
`;
