import styled from "styled-components";

export const StyledWeekProgress = styled.div`
  min-width: 327px;
  height: 60px;
  padding: 17px 0 0 5px;

  h3 {
    text-transform: uppercase;
    font-size: 0.565rem;
    text-align: left;
    color: rgb(193, 193, 193);
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 1024px) {
    & {
      min-width: 0px;
      align-items: center;
      padding-left: 0;
    }

    h3 {
      text-align: center;
    }
  }
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  width: 230px;
  margin-left: 2px;

  .singleWeek:first-child {
    margin-left: -5px;
  }

  .singleWeek:last-child {
    margin-right: -5px;
  }

  .weekId {
    font-size: 0.565rem;
    text-align: left;
    color: rgb(193, 193, 193);
    text-align: center;
    padding: 2px 0 0 2px;
  }

  @media only screen and (max-width: 1024px) {
    & {
      align-items: center;
    }
  }
`;
