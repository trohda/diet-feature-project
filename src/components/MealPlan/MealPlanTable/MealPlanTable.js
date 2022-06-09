import DietDay from "./DietDay/DietDay";
import { MealPlanTableWrapper } from "./MealPlanTableStyles/MealPlanTable.styled";
import VerticalTableHeader from "./VerticalTableHeader.js/VerticalTableHeader";
import { weeks } from "../data/database";
import { useState } from "react";
const MealPlanTable = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  return (
    <MealPlanTableWrapper>
      <VerticalTableHeader currentWeek={currentWeek} />
      {weeks.map((el, ind) => {
        if (ind === currentWeek) {
          return el.days.map((element, i) => {
            return <DietDay key={i} dayData={element} />;
          });
        }
      })}
    </MealPlanTableWrapper>
  );
};

export default MealPlanTable;

/* <DietDay weeksData={weeks[currentWeek]} /> */
