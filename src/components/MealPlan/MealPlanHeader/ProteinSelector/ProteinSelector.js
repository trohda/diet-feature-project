import {
  StyledProteinProgres,
  StyledTypeOfProteinWrapper,
} from "../MealPlanHeaderStyles/ProteinSelector.styled";
import TypeOfProtein from "./TypeOfProtein/TypeOfProtein";
import broccoliActive from "./img/broccoliActive.png";
import cheeseActive from "./img/cheeseActive.png";
import steakActive from "./img/steakActive.png";
import fishActive from "./img/fishActive.png";
import chickenActive from "./img/chickenActive.png";
import broccoliInActive from "./img/broccoliInActive.png";
import cheeseInActive from "./img/cheeseInActive.png";
import steakInActive from "./img/steakInActive.png";
import fishInActive from "./img/fishInActive.png";
import chickenInActive from "./img/chickenInActive.png";
import { useState } from "react";

const ProteinSelector = () => {
  const [isBroccoliActive, setIsBroccoliActive] = useState(true);
  const [isCheeseActive, setIsCheeseActive] = useState(true);
  const [isSteakActive, setIsSteakActive] = useState(true);
  const [isFishActive, setIsFishActive] = useState(true);
  const [isChickenActive, setIsChickenActive] = useState(true);

  const handlerClick = (event, state, setState) => {
    event.preventDefault();
    setState(!state);
  };

  return (
    <>
      <StyledProteinProgres>
        <div className="contentWrapper">
          <h3>Select your protein options</h3>
          <StyledTypeOfProteinWrapper>
            <TypeOfProtein
              imgSrc={isBroccoliActive ? broccoliActive : broccoliInActive}
              alt="broccoli"
              onClick={(e) => {
                handlerClick(e, isBroccoliActive, setIsBroccoliActive);
              }}
            />
            <TypeOfProtein
              imgSrc={isCheeseActive ? cheeseActive : cheeseInActive}
              alt="cheese"
              onClick={(e) => {
                handlerClick(e, isCheeseActive, setIsCheeseActive);
              }}
            />
            <TypeOfProtein
              imgSrc={isSteakActive ? steakActive : steakInActive}
              alt="steak"
              onClick={(e) => {
                handlerClick(e, isSteakActive, setIsSteakActive);
              }}
            />
            <TypeOfProtein
              imgSrc={isFishActive ? fishActive : fishInActive}
              alt="fish"
              onClick={(e) => {
                handlerClick(e, isFishActive, setIsFishActive);
              }}
            />
            <TypeOfProtein
              imgSrc={isChickenActive ? chickenActive : chickenInActive}
              alt="chicken"
              onClick={(e) => {
                handlerClick(e, isChickenActive, setIsChickenActive);
              }}
            />
          </StyledTypeOfProteinWrapper>
        </div>
      </StyledProteinProgres>
    </>
  );
};

export default ProteinSelector;
