import { StyledWeekProgress } from "../MealPlanHeaderStyles/WeekProgress.styled";
import WeekProgressBar from "./WeekProgressBar/WeekProgressBar";

const WeekProgress = () => {
  return (
    <StyledWeekProgress>
      <h3>Your 12 week progress</h3>
      <WeekProgressBar />
    </StyledWeekProgress>
  );
};

export default WeekProgress;
