import styled from "styled-components";

export const MealPlanTableWrapper = styled.div`
  background-color: rgb(211, 211, 211);
  margin-left: 1px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1024px) {
    & {
      display: none;
    }
  }
`;
