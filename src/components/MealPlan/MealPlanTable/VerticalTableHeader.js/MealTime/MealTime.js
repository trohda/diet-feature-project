import { MealTimeWrapper } from "../../MealPlanTableStyles/VerticalTableHeader.styled";

const MealTime = ({ time }) => {
  return (
    <MealTimeWrapper>
      <p>{time.time}</p>
      <p>{time.partOfDay}</p>
    </MealTimeWrapper>
  );
};

export default MealTime;
