import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './index.css'
import {LandingPage} from "./pages/LandingPage.tsx";
import {Header} from "./components/Header.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";


function App() {


  return (
    <Router>
      <div>
        <Header/>
        <main>
          <Routes>
            {/*<Route path="/" element={<LandingPage />} />*/}
            <Route path="/" element={<LoginPage />} />
            <Route path="/boards" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
