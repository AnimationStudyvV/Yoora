import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import NavbarPage from "./pages/NavBarPage";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<NavbarPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
