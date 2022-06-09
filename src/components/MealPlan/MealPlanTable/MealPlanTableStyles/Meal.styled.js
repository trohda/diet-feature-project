import styled from "styled-components";

export const StyledMeal = styled.div`
  background-color: white;
  width: 100%;
  height: 90px;
  border-top: 2px solid #d3d3d3;
  position: relative;
  cursor: pointer;

  p {
    text-align: left;
    font-size: 0.84rem;
    color: ${({ textColor }) => textColor};
    margin: 10px 8px 0 12px;
    line-height: 1.26;
  }

  p > img {
    margin-top: -4px;
    float: right;
  }

  .mealImg {
    position: absolute;
    bottom: 0px;
    left: 8px;
  }
`;
