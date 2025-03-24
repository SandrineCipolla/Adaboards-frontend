import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './index.css'
import {LandingPage} from "./pages/LandingPage.tsx";
import {Header} from "./components/Header.tsx";
import {HomePage} from "./pages/HomePage.tsx";


function App() {


  return (
    <Router>
      <div>
        <Header/>
        <main>
          <Routes>
            {/*<Route path="/" element={<LandingPage />} />*/}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
