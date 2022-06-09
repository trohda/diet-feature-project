import { useState } from "react";
import { StyledMeal } from "../../MealPlanTableStyles/Meal.styled";
import mealCompleted from "../../../img/mealCompleted.png";

const Meal = ({ dayMeals, isCurrent }) => {
  const [isMealEaten, setIsMealEaten] = useState(false);
  const handlerMealEaten = (e) => {
    e.preventDefault();
    setIsMealEaten(!isMealEaten);
  };

  return (
    <>
      <StyledMeal
        onClick={handlerMealEaten}
        textColor={isCurrent ? "black" : "rgb(130, 130, 130)"}
      >
        <p>
          {isMealEaten && <img src={mealCompleted} alt="Checked mark" />}
          {dayMeals.mealName}
        </p>
        {dayMeals.inActiveMealPic && (
          <img
            className="mealImg"
            src={isCurrent ? dayMeals.activeMealPic : dayMeals.inActiveMealPic}
            alt={dayMeals.mealName}
          />
        )}
      </StyledMeal>
    </>
  );
};

export default Meal;
