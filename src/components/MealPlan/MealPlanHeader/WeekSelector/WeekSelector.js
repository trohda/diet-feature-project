import { useState } from "react";
import { StyledWeekSelector } from "../MealPlanHeaderStyles/WeekSelector.styled";
import arrowLeft from "./img/arrowLeft.png";
import arrowRight from "./img/arrowRight.png";
const WeekSelector = () => {
  const [weekNumber, setWeekNumber] = useState(7);

  const incrementHandlerClick = (e) => {
    e.preventDefault();
    setWeekNumber(weekNumber + 1);
  };

  const decrementHandlerClick = (e) => {
    e.preventDefault();
    setWeekNumber(weekNumber - 1);
  };

  return (
    <>
      <StyledWeekSelector>
        <div className="buttonWrapper left">
          {weekNumber !== 1 && (
            <button onClick={decrementHandlerClick}>
              <img src={arrowLeft} alt="arrow left" />
            </button>
          )}
        </div>

        <h2>Week {weekNumber}</h2>
        <div className="buttonWrapper right">
          {weekNumber !== 4 && (
            <button onClick={incrementHandlerClick}>
              <img src={arrowRight} alt="arrow right" />
            </button>
          )}
        </div>
      </StyledWeekSelector>
    </>
  );
};

export default WeekSelector;
