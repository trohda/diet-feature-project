import DietDay from "./DietDay/DietDay";
import { MealPlanTableWrapper } from "./MealPlanTableStyles/MealPlanTable.styled";
import VerticalTableHeader from "./VerticalTableHeader.js/VerticalTableHeader";
import { weeks } from "../data/database";
import { useState } from "react";
const MealPlanTable = ({ isMobile, currentWeek }) => {
  return (
    <MealPlanTableWrapper>
      <VerticalTableHeader currentWeek={currentWeek} />

      {isMobile
        ? weeks.map((el, ind) => {
            if (ind === currentWeek) {
              return el.days.map((element, i, arr) => {
                if (element.isCurrent === true) {
                  if (i === 0) {
                    return (
                      <>
                        <DietDay key={i} dayData={element} />
                        <DietDay key={i + 1} dayData={arr[i + 1]} />
                        <DietDay key={i + 2} dayData={arr[i + 2]} />
                      </>
                    );
                  } else if (i === arr.length - 1) {
                    return (
                      <>
                        <DietDay key={i} dayData={arr[i - 1]} />
                        <DietDay key={i + 1} dayData={arr[i - 2]} />
                        <DietDay key={i + 2} dayData={element} />
                      </>
                    );
                  } else {
                    return (
                      <>
                        <DietDay dayData={arr[i - 1]} />
                        <DietDay dayData={element} />
                        <DietDay dayData={arr[i + 1]} />
                      </>
                    );
                  }
                }
              });
            } else {
              return null;
            }
          })
        : weeks.map((el, ind) => {
            if (ind === currentWeek) {
              return el.days.map((element, i) => {
                return <DietDay key={i} dayData={element} />;
              });
            } else {
              return null;
            }
          })}
    </MealPlanTableWrapper>
  );
};

export default MealPlanTable;
