import styled from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div:first-child {
    border-right: 1px solid lightgrey;
  }

  & > div:last-child {
    border-left: 1px solid lightgrey;
    padding-left: 16px;
  }

  @media only screen and (max-width: 1024px) {
    & {
      width: 100%px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div:first-child {
        border-right: none;
      }

      & > div:last-child {
        border-left: none;
        padding-left: 0px;
      }
    }
  }
`;

export const StyledFooterButton = styled.button`
  border: 1px solid rgb(184, 184, 184);
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
  cursor: pointer;
  transition: all 0.5s ease;
  overflow: hidden;

  span {
    position: relative;

    transition: all 0.5s ease;
  }

  span:after {
    content: "";
    background-color: black;
    height: 35px;
    width: ${({ width }) => width};
    position: absolute;
    opacity: 0;
    transition: 0.5s ease;
    top: -18px;
    left: 12px;
  }

  &:hover span:after {
    opacity: 0.2;
    left: -300px;
  }
`;
