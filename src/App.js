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
import Error404 from "./Components/Error404";
import Error503 from "./Components/Error503";
import ViewInstitute from "./Components/ViewInstitute"
import ViewAccountsProfile from "./Components/ViewAccountsProfile";
// Role ID
// 1: Institute
// 2: University
// 3: UGC
// 4: UGC Staff
// 5: Accountant
// 6: Lab Assistant
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
          <Route exact path="/instituteProfile" element={<><Header  roleID="1"/><InstituteProfile/><Footer/></>}/>
          <Route exact path="/addlab" element={<><Header/><Addlab/><Footer/></>}/>
          <Route exact path="/addwf" element={<><Header/><AddWorkforce/><Footer/></>}/>
          <Route exact path="/wfrequest" element={<><Header roleID="1"/><WorkforceRequest/><Footer/></>}/>
          <Route exact path="/pay" element={<Paynow/>}/>
          <Route exact path="/labrequest" element={<><Header roleID="1"/><Labrequest/><Footer/></>}/>
          <Route exact path="/intituterequest" element={<><Header/><InstituteRequests/><Footer/></>}/>
          <Route exact path="/wfprofile" element={<><Header roleID = "6"/><WorkforceProfile/><Footer/></>}/>
          <Route exact path="/universityProfile" element={<><Header roleID="2"/><UniversityProfile/><Footer/></>}/>
          <Route exact path="/ugcProfile" element={<><Header roleID = "4"/><UGCProfile/><Footer/></>}/>
          <Route exact path="/ugcStaffProfile" element={<><Header roleID="4"/><UGCStaffProfile/><Footer/></>}/>
          <Route exact path="/accountsProfile" element={<><Header roleID="5"/><AccountsProfile/><Footer/></>}/>
          <Route exact path="/viewlabs" element={<><Header/><ViewLabs/><Footer/></>}/>
          <Route exact path="/resorcerequest" element={<><Header roleID="1"/><ResourceRequest/><Footer/></>}/>
          <Route exact path="/editresorcerequest" element={<><Header roleID="1"/><EditResourceRequestspage/><Footer/></>}/>
          <Route exact path="/resourceapproval" element={<><Header roleID="1"/><ResourceApproval/><Footer/></>}/>
          <Route exact path="/universityList" element={<><Header/><UniversityList/><Footer/></>}/>
          <Route exact path="/instituteList" element={<><Header/><InstituteList/><Footer/></>}/>
          <Route exact path="/error404" element={<><Error404/></>}/>
          <Route exact path="/error503" element={<Error503/>}/>
          <Route exact path="/viewinstitute" element={<><Header roleID = "4"/><ViewInstitute/><Footer/></>}/>
          <Route exact path="/viewaccountantprofile" element={<><Header roleID = "4"/><ViewAccountsProfile/><Footer /></>} />
        </Routes>
    </Router>
  );
}

export default App;
