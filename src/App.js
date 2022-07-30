import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/signup" element={<><Signup/></>}/>
          {/* <Route exact path="/feed" element={<><Navbar/><Feed/></>}/>

          <Route exact path="/upcomingconf" element={<><Navbar/><UpcomingConferences/></>}/>
          <Route exact path="/chat" element={<><Navbar/><Chat/></>}/>
          <Route exact path="/academiceve" element={<><Navbar/><AcademicEvents/></>}/>
          <Route exact path="/eventdet" element={<><Navbar/><Eventdetails/></>}/>
          <Route exact path="/collaborators" element={<><Navbar/><Collaborators/></>}/>
          <Route exact path="/collabreq" element={<><Navbar/><Collabreq/></>}/>
          <Route exact path="/collabdet" element={<><Navbar/><Collabdetails/></>}/>
          <Route exact path="/recommend" element={<><Navbar/><Recommend/></>}/>
          <Route exact path="/research" element={<><Navbar/><Papers/><Footer/></>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
