import { VerticalTableHeaderWrapper } from "../MealPlanTableStyles/VerticalTableHeader.styled";
import workoutArrow from "../../img/workoutArrow.png";
import MealTime from "./MealTime/MealTime";
import { weeks } from "../../data/database";
import { useState } from "react";

const VerticalTableHeader = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  return (
    <VerticalTableHeaderWrapper>
      <div className="invisibleHeader"></div>
      <div className="timesWrapper">
        {weeks.map((el, ind) => {
          if (ind === currentWeek) {
            return el.hours.map((element, i) => {
              return <MealTime key={i} time={element} />;
            });
          }
        })}
      </div>
      <div className="footer">
        <div className="footerWorkout">
          <span className="footerWorkoutSpan">
            <p> Workout</p>
            <img src={workoutArrow} alt="arrow" />
          </span>
        </div>
      </div>
    </VerticalTableHeaderWrapper>
  );
};

export default VerticalTableHeader;
