import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Indexbody from './Components/Indexbody';
import LogIn from "./Components/LogIn";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<><Indexbody/></>}/>
          <Route exact path="/login" element={<><LogIn/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
