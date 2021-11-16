import Home from "./containers/home";
import Login from "./containers/login";
import Register from "./containers/register";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" exact element = {<Register/>}/>
        <Route path="/home" exact element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
