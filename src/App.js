import { BrowserRouter, Routes ,Route } from "react-router-dom";
import { AppRoutes } from "./AppRoutes/AppRoutes";

import Background from './Components/Background';
import { ThemeProvider } from "./Components/ThemeContext";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <Background>
            <AppRoutes />
          </Background>
        </ThemeProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
