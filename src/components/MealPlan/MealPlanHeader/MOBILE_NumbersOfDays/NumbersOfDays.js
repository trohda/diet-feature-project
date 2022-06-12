import { weeks } from "../../data/database";
import { StyledNumberOfDays } from "../MealPlanHeaderStyles/NumbersOfDays.styled";

const NumbersOfDays = ({ currentWeek }) => {
  return (
    <StyledNumberOfDays>
      <h2>Days Numbers</h2>
      <div className="numbers">
        {weeks.map((el, ind) => {
          if (ind === currentWeek) {
            return el.days.map((element) => {
              return (
                <div
                  key={element.dayNumber}
                  className={element.isCurrent ? "currentDay" : "number"}
                >
                  {element.dayNumber}
                </div>
              );
            });
          }
        })}
      </div>
    </StyledNumberOfDays>
  );
};

export default NumbersOfDays;
