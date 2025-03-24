import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css'
import {LandingPage} from "./pages/LandingPage.tsx";


function App() {


  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
