import { StyledFooterElement } from "../FooterStyles/FooterElement.styled";

const FooterElement = ({ children, header, paragraph }) => {
  return (
    <StyledFooterElement>
      <div className="footerElement header">
        <h2>{header}</h2>
      </div>
      <div className="footerElement paragraph">
        <p>{paragraph}</p>
      </div>
      <div className="footerElement buttons">{children}</div>
    </StyledFooterElement>
  );
};

export default FooterElement;
