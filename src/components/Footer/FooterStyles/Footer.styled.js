import styled from "styled-components";

export const StyledFooter = styled.footer`
  box-sizing: border-box;
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div:first-child {
    border-right: 1px solid lightgrey;
  }

  & > div:last-child {
    border-left: 1px solid lightgrey;
    padding-left: 17px;
  }
`;

export const StyledFooterButton = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: rgb(184, 184, 184);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0);
  width: ${({ width }) => width};
  height: 35px;
  color: rgb(164, 164, 164);
  font-size: 1.2rem;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-right: 15px;
`;
