import {
  Container,
  UnderHeaderBackground,
} from "./mainLayoutStyles/Container.styled";
import Header from "./components/Header/Header";
import GlobalStyles from "./mainLayoutStyles/Global";
import MealPlan from "./components/MealPlan/MealPlan";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <UnderHeaderBackground>
          <MealPlan />
          <Footer />
        </UnderHeaderBackground>
      </Container>
    </>
  );
}

export default App;
