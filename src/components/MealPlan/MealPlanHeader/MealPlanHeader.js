import { MealPlanHEaderWrapper } from "./MealPlanHeaderStyles/MealPlanHeader.styled";
import ProteinSelector from "./ProteinSelector/ProteinSelector";
import WeekProgress from "./WeekProgress/WeekProgress";
import WeekSelector from "./WeekSelector/WeekSelector";

const MealPlanHeader = () => {
  return (
    <MealPlanHEaderWrapper>
      <WeekProgress />
      <WeekSelector />
      <ProteinSelector />
    </MealPlanHEaderWrapper>
  );
};

export default MealPlanHeader;
