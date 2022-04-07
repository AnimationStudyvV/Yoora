import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./components/Navigation";
import EffectPage from "./pages/EffectPage";
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
          <Route path="/effect" element={<EffectPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
