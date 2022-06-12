import styled from "styled-components";

export const StyledNumberOfDays = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0 -90px 0;
  color: rgb(193, 193, 193);

  .numbers {
    display: flex;
    flex-direction: row;
    margin: 8px 0;
  }

  .number {
    padding: 0 5px;
    color: rgb(173, 187, 12);
  }

  .currentDay {
    padding: 0 5px;
    color: rgb(255, 128, 26);
  }
`;
