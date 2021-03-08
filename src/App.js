import Header from "./components/Header/Header";
import { GlobalStyles } from "./assets/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme";
import "./App.css";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Header />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
