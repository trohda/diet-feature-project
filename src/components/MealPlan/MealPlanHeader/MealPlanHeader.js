import { MealPlanHEaderWrapper } from "./MealPlanHeaderStyles/MealPlanHeader.styled";
import NumbersOfDays from "./MOBILE_NumbersOfDays/NumbersOfDays";
import ProteinSelector from "./ProteinSelector/ProteinSelector";
import WeekProgress from "./WeekProgress/WeekProgress";
import WeekSelector from "./WeekSelector/WeekSelector";

const MealPlanHeader = ({ isMobile, currentWeek }) => {
  return (
    <MealPlanHEaderWrapper>
      <WeekProgress />
      <WeekSelector />
      <ProteinSelector />
      {isMobile && <NumbersOfDays currentWeek={currentWeek} />}
    </MealPlanHEaderWrapper>
  );
};

export default MealPlanHeader;
