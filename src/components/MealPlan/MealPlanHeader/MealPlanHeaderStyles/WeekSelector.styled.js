import styled from "styled-components";

export const StyledWeekSelector = styled.div`
  min-width: 327px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 2px;

  @media only screen and (max-width: 1024px) {
    & {
      width: 32px;
    }
  }

  h2 {
    font-size: 3rem;

    color: rgb(255, 148, 40);
    text-align: center;
    padding-top: 5px;
  }

  .buttonWrapper {
    width: 42px;
    display: flex;
    flex-direction: row;
  }

  .right {
    justify-content: flex-end;
  }

  button {
    border: 1px solid rgb(192, 192, 192);
    border-radius: 5px;
    background-color: white;
    width: 26px;
    height: 43px;
    padding-top: 3px;
    cursor: pointer;
    transition: all 0.5s ease;

    display: inline-block;
  }

  .right button:hover {
    background-color: rgba(173, 178, 12, 0.3);
  }

  .right button:active {
    transform: scale(1.2, 1) translateX(5px);
  }

  .left button:hover {
    background-color: rgba(173, 178, 12, 0.3);
  }

  .left button:active {
    transform: scale(1.2, 1) translateX(-5px);
  }
`;
