import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/reset.css";
import "./assets/font/BagelFatOne.css";
import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/movie/:id" element = {<Detail />}/>
      </Routes>
    </Router>
  );

}

export default App;