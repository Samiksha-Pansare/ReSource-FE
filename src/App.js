import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AddResources from "./Components/AddResources";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Indexbody from './Components/Indexbody';
import LogIn from "./Components/LogIn";
import ViewResources from "./Components/ViewResources";
import Profile from "./Components/Profile";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<><Indexbody/></>}/>
          <Route exact path="/login" element={<><LogIn/></>}/>
          <Route exact path="/addres" element={<AddResources/>}/>
          <Route exact path="/header" element={<Header/>}/>
          <Route exact path="/footer" element={<Footer/>}/>
          <Route exact path="/viewres" element={<><Header/><ViewResources/><Footer/></>}/>
          <Route exact path="/profile" element={<><Header/><Profile/><Footer/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
