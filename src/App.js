import Mainpage from "./Components/Mainpage";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#F8F9FA] font-playfair overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
