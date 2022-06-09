import { VerticalTableHeaderWrapper } from "../MealPlanTableStyles/VerticalTableHeadr.styled";

const VerticalTableHeader = () => {
  return (
    <VerticalTableHeaderWrapper>
      <div className="invisibleHeader"></div>
      <div className="footer"></div>
    </VerticalTableHeaderWrapper>
  );
};

export default VerticalTableHeader;
