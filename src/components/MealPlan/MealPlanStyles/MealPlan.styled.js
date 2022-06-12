import styled from "styled-components";

export const StyledMealPlan = styled.div`
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    & {
      width: 100%px;
    }
  }
`;
