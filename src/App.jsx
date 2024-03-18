import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fb8500",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Create></Create>
        <Notes></Notes>
      </ThemeProvider>
    </div>
  );
}

export default App;
