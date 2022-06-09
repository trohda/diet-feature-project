import {
  StyledDietDay,
  DietDayFooter,
  DietDayHeader,
} from "../MealPlanTableStyles/DietDay.styled";
import barbellsGrey from "../../img/barbellsGrey.png";
import barbellsOrange from "../../img/barbellsOrange.png";
import workoutCheck from "../../img/workoutCheck.png";
import printer from "../../img/printer.png";
import { useState } from "react";
import Meal from "./Meal/Meal";
import GuiltFreeDay from "./GuiltFreeDay/GuiltFreeDay";

const DietDay = ({ dayData }) => {
  const [workoutDone, setWorkoutDone] = useState(false);

  const handlerWorkoutDone = (e) => {
    e.preventDefault();
    setWorkoutDone(!workoutDone);
  };
  return (
    <>
      <StyledDietDay>
        {dayData.isCurrent && <div className="activeBorder"></div>}
        <DietDayHeader
          textColor={
            dayData.isCurrent ? "rgb(255, 128, 26)" : "rgb(173, 187, 12)"
          }
        >
          {`Day ${dayData.dayNumber}`}
        </DietDayHeader>

        {dayData.isGuiltFree ? (
          <GuiltFreeDay />
        ) : (
          <>
            {dayData.meals.map((el, ind) => {
              return (
                <Meal key={ind} dayMeals={el} isCurrent={dayData.isCurrent} />
              );
            })}
          </>
        )}

        <DietDayFooter>
          {dayData.isGuiltFree ? (
            <>
              <div className="print">
                <div className="printerImage">
                  <img src={printer} alt="printer" />
                </div>
                <div className="printerText">Print</div>
              </div>
            </>
          ) : (
            <>
              <div className="carbs">
                <p>{dayData.carbohydrates}</p>
              </div>
              <div className="workout" onClick={handlerWorkoutDone}>
                <div className="workoutImageWrapper">
                  {workoutDone ? (
                    <>
                      <img
                        className="doneBarbells"
                        src={barbellsOrange}
                        alt="barbell"
                      />
                      <img src={workoutCheck} alt="checked mark" />
                    </>
                  ) : (
                    <img src={barbellsGrey} alt="barbell" />
                  )}
                </div>
              </div>
            </>
          )}
        </DietDayFooter>
      </StyledDietDay>
    </>
  );
};

export default DietDay;
