// import './App.css'
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
