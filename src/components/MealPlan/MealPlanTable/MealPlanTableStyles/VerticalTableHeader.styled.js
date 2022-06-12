import styled from "styled-components";
import verticalHeaderBackground from "../../img/background.png";

export const VerticalTableHeaderWrapper = styled.div`
  background-image: url(${verticalHeaderBackground});
  width: 86px;
  display: flex;
  flex-direction: column;

  .invisibleHeader {
    width: 100%;
    height: 52px;
  }

  .footer {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .footerWorkout {
    width: 100%;
    height: 33px;
    border-top: 2px solid #d3d3d3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .footerWorkoutSpan {
    font-size: 0.7rem;
    color: rgb(130, 130, 130);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .footerWorkoutSpan p {
    margin: 0 6px 0 8px;
  }
  .timesWrapper div:last-child {
    border-bottom: none;
  }
`;

export const MealTimeWrapper = styled.div`
  width: 100%;
  height: 90px;
  font-size: 0.84rem;

  color: rgb(130, 130, 130);
  text-align: center;
  border-bottom: 2px solid #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding: 3px 0 0 0px;
  }
  p:first-child {
    font-weight: 600;
    margin-right: 2px;
  }
`;
