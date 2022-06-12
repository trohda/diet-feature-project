import styled from "styled-components";

export const MealPlanHEaderWrapper = styled.div`
  width: 100%;
  min-height: 109px;
  margin: 0 21px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    & {
      flex-direction: column;
      width: 320px;
      margin: 0;
    }
  }
`;
