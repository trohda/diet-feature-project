import {
  DietDayWrapper,
  DietDayFooter,
  DietDayHeader,
} from "../MealPlanTableStyles/DietDay.styled";
import barbellsGrey from "../../img/barbellsGrey.png";
import barbellsOrange from "../../img/barbellsOrange.png";
import workoutCheck from "../../img/workoutCheck.png";
import printer from "../../img/printer.png";
import { useState } from "react";
import Meal from "./Meal/Meal";

const DietDay = ({ dayData }) => {
  const [workoutDone, setWorkoutDone] = useState(false);
  //   console.log(dayData.meals);

  const handlerWorkoutDone = (e) => {
    e.preventDefault();
    setWorkoutDone(!workoutDone);
  };
  return (
    <>
      <DietDayWrapper>
        <DietDayHeader>{`Day ${dayData.dayNumber}`}</DietDayHeader>
        {dayData.meals.map()}
        <Meal />
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
      </DietDayWrapper>
    </>
  );
};

export default DietDay;
