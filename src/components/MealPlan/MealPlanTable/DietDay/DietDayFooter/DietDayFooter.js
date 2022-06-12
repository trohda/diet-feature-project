import {
  StyledDietDayFooter,
  Workout,
} from "../../MealPlanTableStyles/DietDay.styled";
import barbellsGrey from "../../../img/barbellsGrey.png";
import barbellsOrange from "../../../img/barbellsOrange.png";
import workoutCheck from "../../../img/workoutCheck.png";
import printer from "../../../img/printer.png";
import { useState } from "react";

const DietDayFooter = ({ dayData }) => {
  const [workoutDone, setWorkoutDone] = useState(dayData.isWorkoutDone);
  const handlerWorkoutDone = (e) => {
    e.preventDefault();
    setWorkoutDone(!workoutDone);
  };
  return (
    <StyledDietDayFooter>
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
          <Workout onClick={handlerWorkoutDone}>
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
          </Workout>
        </>
      )}
    </StyledDietDayFooter>
  );
};

export default DietDayFooter;
