import MealPlanHeader from "./MealPlanHeader/MealPlanHeader";
import { StyledMealPlan } from "./MealPlanStyles/MealPlan.styled";
import MealPlanTable from "./MealPlanTable/MealPlanTable";

const MealPlan = () => {
  return (
    <StyledMealPlan>
      <MealPlanHeader />
      <MealPlanTable />
    </StyledMealPlan>
  );
};

export default MealPlan;
