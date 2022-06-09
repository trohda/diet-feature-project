import styled from "styled-components";
import dietDayFooterBackground from "../../img/background.png";

export const DietDayWrapper = styled.div`
  width: 127px;
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 2px solid rgbA(0, 0, 0, 0);

  &:last-child {
    border-right: none;
  }
`;

export const DietDayHeader = styled.div`
  font-size: 1.51rem;
  background-color: white;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid rgbA(0, 0, 0, 0);
  color: rgb(173, 187, 12);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DietDayFooter = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${dietDayFooterBackground});

  .carbs {
    height: 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .carbs p {
    text-transform: uppercase;
    font-size: 0.7rem;
    padding-bottom: 3px;
    color: rgb(130, 130, 130);
  }

  .workout {
    width: 100%;
    height: 33px;
    border-top: 2px solid #d3d3d3;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .workoutImageWrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 3px;
    gap: 8px;
  }
  .doneBarbells {
    margin-left: 18px;
  }

  .print {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: rgb(130, 130, 130);
    font-size: 1.15rem;
    gap: 13px;
  }
  .printerImage {
    padding: 3px 0 0 3px;
  }
`;
