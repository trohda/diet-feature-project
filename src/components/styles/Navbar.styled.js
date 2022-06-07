import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: 100%;
  ul {
    display: flex;
    flex-direction: row;
    width: 50%;
    border-left: 1px solid rgb(240, 240, 240);
    position: relative;
  }

  ul li {
    font-size: 0.9rem;
    font-weight: 600;
    font-family: "Helvetica";
    color: rgb(124, 124, 124);
    line-height: 1.7;
    z-index: 196;
    padding: 28px 28px 29px 4px;

    text-shadow: 0px 0px 2px rgba(175, 175, 175, 0.8);
  }

  ul li:first-child {
    color: rgb(255, 150, 42);
    padding-left: 31px;
  }

  .underLine {
    width: 25px;
    height: 3px;
    border-bottom: 2px solid rgba(255, 150, 42, 0.6);
    position: absolute;
    top: 52px;
    left: 66px;
  }
`;
