import DietDay from "./DietDay/DietDay";
import { MealPlanTableWrapper } from "./MealPlanTableStyles/MealPlanTable.styled";
import VerticalTableHeader from "./VerticalTableHeader.js/VerticalTableHEader";

const MealPlanTable = () => {
  return (
    <MealPlanTableWrapper>
      <VerticalTableHeader />
      <DietDay />
    </MealPlanTableWrapper>
  );
};

export default MealPlanTable;
