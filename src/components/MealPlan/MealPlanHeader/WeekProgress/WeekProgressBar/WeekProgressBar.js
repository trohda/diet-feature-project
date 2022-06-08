//
import { ProgressBarWrapper } from "../../MealPlanHeaderStyles/WeekProgress.styled";
import { progressWeeks } from "./data/data";
import pastImg from "./img/past.png";
import futureImg from "./img/future.png";
import currentImg from "./img/current.png";

const WeekProgressBar = () => {
  return (
    <ProgressBarWrapper>
      {progressWeeks.map((el) => {
        if (el.isActive) {
          return (
            <div key={el.weekId} className="singleWeek">
              <img src={currentImg} alt="progress week icon" />
              <p className="weekId">{el.weekId}</p>
            </div>
          );
        } else if (el.isDone) {
          return (
            <div key={el.weekId} className="singleWeek">
              <img src={pastImg} alt="progress week icon" />
              <p className="weekId">{el.weekId}</p>
            </div>
          );
        } else if (!el.isDone) {
          return (
            <div key={el.weekId} className="singleWeek">
              <img src={futureImg} alt="progress week icon" />
              <p className="weekId">{el.weekId}</p>
            </div>
          );
        }
      })}
    </ProgressBarWrapper>
  );
};

export default WeekProgressBar;
