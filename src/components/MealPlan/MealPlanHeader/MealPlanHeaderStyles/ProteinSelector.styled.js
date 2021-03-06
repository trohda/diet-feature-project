import styled from "styled-components";

export const StyledProteinSelector = styled.div`
  width: 327px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h3 {
    text-transform: uppercase;
    font-size: 0.565rem;
    text-align: left;
    color: rgb(193, 193, 193);
    margin-bottom: 10px;
  }

  .contentWrapper {
    margin-top: 6px;
    margin-right: 4px;
  }

  @media only screen and (max-width: 1024px) {
    & {
      align-items: center;
    }
    h3 {
      text-align: center;
    }
  }
`;

export const StyledTypeOfProteinWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  img {
    cursor: pointer;
  }
`;
