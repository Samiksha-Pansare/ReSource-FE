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
import Resourcedetail from "./Components/Resourcedetail";
import Cart from "./Components/Cart";
import InstituteProfile from "./Components/InstituteProfile";
import Addlab from "./Components/Addlab";
import AddWorkforce from "./Components/AddWorkforce";
import InstituteCompletion from "./Components/InstituteCompletion";
import WorkforceRequest from "./Components/WorkforceRequest";
import Paynow from "./Components/Paynow";
import Labrequest from "./Components/Labrequest";
import InstituteRequests from "./Components/InstituteRequests";
import WorkforceProfile from "./Components/WorkforceProfile";
import UniversityProfile from "./Components/UniversityProfile";
import UGCProfile from "./Components/UGCProfile";
import UGCStaffProfile from "./Components/UGCStaffProfile";
import AccountsProfile from "./Components/AccountsProfile";
import ViewLabs from "./Components/ViewLabs";
import ResourceRequest from "./Components/ResourceRequest";
import EditResourceRequestspage from "./Components/EditResourceRequestspage";
import ResourceApproval from "./Components/ResourceApproval";
import UniversityList from "./Components/UniversityList";
import InstituteList from "./Components/InstituteList";

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
          <Route exact path="/resdetail" element={<><Header/><Resourcedetail/><Footer/></>}/>
          <Route exact path="/cart" element={<><Header/><Cart/><Footer/></>}/>
          <Route exact path="/instituteProfile" element={<><Header/><InstituteProfile/><Footer/></>}/>
          <Route exact path="/addlab" element={<><Header/><Addlab/><Footer/></>}/>
          <Route exact path="/addwf" element={<><Header/><AddWorkforce/><Footer/></>}/>
          <Route exact path="/wfrequest" element={<><Header/><WorkforceRequest/><Footer/></>}/>
          <Route exact path="/pay" element={<Paynow/>}/>
          <Route exact path="/labrequest" element={<><Header/><Labrequest/><Footer/></>}/>
          <Route exact path="/intituterequest" element={<><Header/><InstituteRequests/><Footer/></>}/>
          <Route exact path="/wfprofile" element={<><Header/><WorkforceProfile/><Footer/></>}/>
          <Route exact path="/universityProfile" element={<><Header/><UniversityProfile/><Footer/></>}/>
          <Route exact path="/ugcProfile" element={<><Header/><UGCProfile/><Footer/></>}/>
          <Route exact path="/ugcStaffProfile" element={<><Header/><UGCStaffProfile/><Footer/></>}/>
          <Route exact path="/accountsProfile" element={<><Header/><AccountsProfile/><Footer/></>}/>
          <Route exact path="/viewlabs" element={<><Header/><ViewLabs/><Footer/></>}/>
          <Route exact path="/resorcerequest" element={<><Header/><ResourceRequest/><Footer/></>}/>
          <Route exact path="/editresorcerequest" element={<><Header/><EditResourceRequestspage/><Footer/></>}/>
          <Route exact path="/resourceapproval" element={<><Header/><ResourceApproval/><Footer/></>}/>
          <Route exact path="/universityList" element={<><Header/><UniversityList/><Footer/></>}/>
          <Route exact path="/instituteList" element={<><Header/><InstituteList/><Footer/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
