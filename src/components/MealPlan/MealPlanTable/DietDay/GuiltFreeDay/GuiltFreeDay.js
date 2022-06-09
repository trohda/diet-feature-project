import { StyledGuiltFreeDay } from "../../MealPlanTableStyles/GuiltFreeDay.styled";
import happyFace from "../../../img/happyFace.png";

const GuiltFreeDay = () => {
  return (
    <StyledGuiltFreeDay>
      <p>Guilt-free day</p>
      <img src={happyFace} alt="happyFace" />
    </StyledGuiltFreeDay>
  );
};

export default GuiltFreeDay;
