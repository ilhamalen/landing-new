import Home from "./landingpage/home/Home";
import Job from "./landingpage/jobvacancy/Job";
import Faq from "./landingpage/faq/Faq";
import Login from "./login/Login";
import Register from "./register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
    // <>
    //   <Home />
    //   <Job />
    //   <Faq />
    // </>
  )
}

export default App;
