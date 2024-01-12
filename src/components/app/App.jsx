import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../header/Header";
import Main from "../main/Main";
// import './App.css';
// import Context from "../Context";

const navTheme = createTheme({
  palette: {
    gray: {
      main: "#B8BDC9",
      dark: "#92959b",
      contrastText: "#E0E0E0",
    },
    warning: {
      main: "#F56039",
      contrastText: "#fff",
    },
    neitral: {
      main: "#fff",
    },
    green: {
      main: "#2BCA8B",
      dark: "#058954",
    },
  },
});

export default function App() {
  // const contextData = { isLinkVisible, setIsLinkVisible };

  return (
    // <Context.Provider value={contextData}>
    <ThemeProvider theme={navTheme}>
      <Header />
      <Main />
    </ThemeProvider>
    // </Context.Provider>
  );
}
