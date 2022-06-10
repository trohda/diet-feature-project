import FooterElement from "./FooterElement/FooterElement";
import { StyledFooter, StyledFooterButton } from "./FooterStyles/Footer.styled";
import arrow from "./img/arrow.png";
import android from "./img/android.png";
import apple from "./img/apple.png";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterElement
        header={"Running out of products?"}
        paragraph={
          "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
        }
      >
        <StyledFooterButton width={"110px"}>
          <p> Buy now</p>
          <img src={arrow} alt="arrow" />
        </StyledFooterButton>
      </FooterElement>
      <FooterElement
        header={"Bod•e Trainer in your pocket"}
        paragraph={
          "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
        }
      >
        <StyledFooterButton width={"99px"}>
          <img src={apple} alt="apple" />
          <p>iOS</p>
          <img src={arrow} alt="arrow" />
        </StyledFooterButton>
        <StyledFooterButton width={"130px"}>
          <img src={android} alt="android" />
          <p>Android</p>
          <img src={arrow} alt="arrow" />
        </StyledFooterButton>
      </FooterElement>
      <FooterElement
        header={"Frequently Asked Questions"}
        paragraph={
          "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
        }
      >
        <StyledFooterButton width={"129px"}>
          <p>Read FAQs</p>
          <img src={arrow} alt="arrow" />
        </StyledFooterButton>
      </FooterElement>
    </StyledFooter>
  );
};

export default Footer;
