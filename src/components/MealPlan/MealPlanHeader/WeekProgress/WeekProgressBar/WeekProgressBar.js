import "./WeekProgressBar.css";
import { progressWeeks } from "./data/data";
import pastImg from "./img/past.png";
import futureImg from "./img/future.png";
import currentImg from "./img/current.png";

const WeekProgressBar = () => {
  return (
    <div className="progressBarWrapper">
      {progressWeeks.map((el) => {
        if (el.isActive) {
          return (
            <div className="singleWeek">
              <img src={currentImg} alt="progress week icon" />
              <p className="weekId">{el.weekId}</p>
            </div>
          );
        } else if (el.isDone) {
          return (
            <div className="singleWeek">
              <img src={pastImg} alt="progress week icon" />
              <p className="weekId">{el.weekId}</p>
            </div>
          );
        } else if (!el.isDone) {
          return (
            <div className="singleWeek">
              <img src={futureImg} alt="progress week icon" />
              <p className="weekId">{el.weekId}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default WeekProgressBar;
