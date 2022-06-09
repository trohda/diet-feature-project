import { VerticalTableHeaderWrapper } from "../MealPlanTableStyles/VerticalTableHeader.styled";
import workoutArrow from "../../img/workoutArrow.png";
import MealTime from "./MealTime/MealTime";
import { weeks } from "../../data/database";

const VerticalTableHeader = ({ currentWeek }) => {
  return (
    <VerticalTableHeaderWrapper>
      <div className="invisibleHeader"></div>
      <div className="timesWrapper">
        {weeks.map((el, ind) => {
          if (ind === currentWeek) {
            return el.hours.map((element, i) => {
              return <MealTime key={i} time={element} />;
            });
          } else return null;
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
