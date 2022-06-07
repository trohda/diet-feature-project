import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header/Header";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
