import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css'
import {LandingPage} from "./pages/LandingPage.tsx";
import {Header} from "./components/Header.tsx";


function App() {


  return (
    <Router>
      <div>
        <Header/>
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
