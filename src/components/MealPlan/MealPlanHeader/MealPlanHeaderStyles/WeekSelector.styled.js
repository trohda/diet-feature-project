import styled from "styled-components";

export const StyledWeekSelector = styled.div`
  width: 327px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 2px;

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
    background-color: rgba(255, 255, 255, 0);
    width: 26px;
    height: 43px;
    padding-top: 3px;
  }
`;
