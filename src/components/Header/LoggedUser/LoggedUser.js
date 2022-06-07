import { StyledLoggedUser } from "../HeaderStyles/LoggedUser.styled";
import chevronUp from "../../../img/icons/chevronUp.png";

const LoggedUser = ({ user, userAvatar }) => {
  return (
    <>
      <StyledLoggedUser>
        <div>
          <img src={userAvatar} alt="user avatar" />
        </div>
        <p>{user}</p>

        <img src={chevronUp} alt="chevron up" />
      </StyledLoggedUser>
    </>
  );
};

export default LoggedUser;
