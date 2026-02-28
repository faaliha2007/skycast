
import './App.css';
import Rainy from './components/Rainy'
import Sunny from "./components/Sunnny"
import Snowy from "./components/Snowy"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
 return(
 <>
<Router>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/sunny" element={<Sunny/>}></Route>
    <Route path="/rainy" element={<Rainy/>}></Route>
    <Route path="/snowy" element={<Snowy/>}></Route>


  </Routes>
</Router>
</>
  );
}

export default App;
