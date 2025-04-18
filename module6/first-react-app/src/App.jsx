import { ThemeContext, ThemeProvider } from "@emotion/react";
import "./App.css";
import BasicUsage from "./components/BasicUsage";
import { BitcoinRates } from "./components/BitcoinRates";
import CustomCard from "./components/Card";

import MUIDialog from "./components/MUIDialog";
import MUIForm from "./components/MUIForm";
import NavBar from "./components/Navbar";
import SxExample from "./components/SxExample";
import { PostList } from "./ListExampleHook/PostList2";
import { DashboardPage } from "./pages/DashboardPage";
import AppRoutes from "./routes/AppRoutes";
import MyThemeProvider from "./Context/ThemeContext";
import { tealTheme } from "./themes/tealTheme";
import LoginPage from "./pages/LoginPage";

// import { ErrorBoudnary } from "react-error-boundary";

function App() {
  return (
    <>
      <ThemeProvider theme={tealTheme}>
        <NavBar>
          <LoginForm />
          <BitcoinRates />
        </NavBar>
      </ThemeProvider>
    </>
  );
}
export default App;
