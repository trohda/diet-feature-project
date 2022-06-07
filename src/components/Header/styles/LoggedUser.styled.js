import styled from "styled-components";

export const StyledLoggedUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;

  p {
    font-size: 0.85rem;
    font-weight: 500;
    font-family: "Helvetica";
    color: rgb(130, 130, 130);
    padding: 2px 10px 0 8px;
    letter-spacing: 1px;
  }

  div {
    padding-bottom: 2px;
  }
`;
