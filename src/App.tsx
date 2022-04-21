import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import FlipClockPage from "./pages/FlipClockPage";
import NavbarPage from "./pages/NavBarPage";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navigation />
        <Routes>
          <Route path="/" element={<NavbarPage />}></Route>
          <Route path="/clock" element={<FlipClockPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
