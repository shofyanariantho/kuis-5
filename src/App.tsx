import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Home from "./pages/Home";

const theme = {
  colors: {
    main: "#4f4d53",
    second: "#e8be02",
    third: "#fff",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
