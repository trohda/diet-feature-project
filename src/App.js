import {
  Container,
  UnderHeaderBackground,
} from "./mainLayoutStyles/Container.styled";
import Header from "./components/Header/Header";
import GlobalStyles from "./mainLayoutStyles/Global";
import MealPlan from "./components/MealPlan/MealPlan";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <UnderHeaderBackground>
          <MealPlan />
        </UnderHeaderBackground>
      </Container>
    </>
  );
}

export default App;
