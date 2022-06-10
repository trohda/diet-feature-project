import styled from "styled-components";

export const StyledLoggedUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  gap: 1px;
  padding-right: 3px;

  p {
    font-size: 0.85rem;
    font-weight: 500;
    color: rgb(130, 130, 130);
    padding: 2px 8px 0 8px;
    letter-spacing: 1px;
  }

  &:hover img:nth-child(3) {
    cursor: pointer;
    animation-name: jumpingIcon;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes jumpingIcon {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px) scale(1.8);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
