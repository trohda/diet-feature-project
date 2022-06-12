import styled from "styled-components";

export const StyledFooterElement = styled.div`
  box-sizing: border-box;
  margin: 46px 0;
  width: 328px;
  padding-left: 30px;
  padding-right: 0px;

  .footerElement {
    box-sizing: border-box;
    width: 100%;
    color: rgb(145, 145, 145);
    border: none;
    padding: 9px 30px 7px 22px;
  }
  .header {
    font-size: 1.68rem;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
  .buttons {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 1024px) {
    & {
      width: 320px;
      margin: 20px 0;
    }
    .footerElement {
      text-align: center;
    }
    .buttons {
      justify-content: center;
    }
  }
`;
