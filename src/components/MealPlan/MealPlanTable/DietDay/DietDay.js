import {
  StyledDietDay,
  DietDayHeader,
} from "../MealPlanTableStyles/DietDay.styled";
import Meal from "./Meal/Meal";
import GuiltFreeDay from "./GuiltFreeDay/GuiltFreeDay";
import DietDayFooter from "./DietDayFooter/DietDayFooter";

const DietDay = ({ dayData }) => {
  return (
    <>
      <StyledDietDay>
        <DietDayHeader
          textColor={
            dayData.isCurrent ? "rgb(255, 128, 26)" : "rgb(173, 187, 12)"
          }
        >
          {`Day ${dayData.dayNumber}`}
        </DietDayHeader>
        {dayData.isCurrent && <div className="activeBorder"></div>}
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

        <DietDayFooter dayData={dayData} />
      </StyledDietDay>
    </>
  );
};

export default DietDay;
