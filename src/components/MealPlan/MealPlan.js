import { useEffect, useState } from "react";
import MealPlanHeader from "./MealPlanHeader/MealPlanHeader";
import { StyledMealPlan } from "./MealPlanStyles/MealPlan.styled";
import MealPlanTable from "./MealPlanTable/MealPlanTable";

const MealPlan = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  //MOBILE DETECTOR
  const [isMobile, setIsMobile] = useState(true);
  useEffect(
    () =>
      window.addEventListener("resize", function () {
        var viewportWidth = window.innerWidth;
        setIsMobile(viewportWidth <= 1024 ? true : false);
      }),
    []
  );
  window.addEventListener("resize", function () {
    var viewportWidth = window.innerWidth;
    setIsMobile(viewportWidth <= 1024 ? true : false);
  });
  return (
    <StyledMealPlan>
      <MealPlanHeader isMobile={isMobile} currentWeek={currentWeek} />
      <MealPlanTable isMobile={isMobile} currentWeek={currentWeek} />
    </StyledMealPlan>
  );
};

export default MealPlan;
