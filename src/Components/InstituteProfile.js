import React , {useState,useEffect} from 'react';
import "../Css/intituteprofile.css";
import img from '../Images/user-account.png';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import EditIcon from '@mui/icons-material/Edit';
import img1 from "../temp_images/temp1.jpeg"
import imgres from "../temp_images/default_image.jpeg"

export default function InstituteProfile() {
 

  return (
    <>
    <div className='container profile-container'>
      <div className='institute-bg-box'>
      </div>
      <div className='blur-bg'>
        <div className='inner-blur MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-b5x8ma'>
          <div className='row row-blur'>
            <div className='col-md-2 '>
              <div className='profile-pic-div'>
                <img src={img} className='profile-image' alt='profile'></img>
              </div>
            </div>
            <div className='col-md-10'>
              <p>
                <h1 className="Profile-name">Vidyalankar Institute Of Technology</h1>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container details-container'>
      <div className='row'>
        <div className='col-md-4'>
        <div className="card profilecards">
            <div className="card__details">
            <Link to={"/labrequest"}>
              <article className="leaderboard__profile">
                <span className="leaderboard__name">Lab Requests</span>
              </article>
            </Link>

            <Link to={"/wfrequest"}>
              <article className="leaderboard__profile">
                <span className="leaderboard__name">Workforce Requests</span>
              </article>
            </Link>

            <Link to={"/resourceapproval"}>
              <article className="leaderboard__profile">
                <span className="leaderboard__name">Resource Approval</span>
              </article>
            </Link>

            <Link to={"/editresorcerequest"}>
              <article className="leaderboard__profile">
                <span className="leaderboard__name">Edit Request</span>
              </article>
            </Link>

            <Link to={"/resorcerequest"}>
              <article className="leaderboard__profile">
                <span className="leaderboard__name">Resource Request</span>
              </article>
            </Link>

            </div>
            </div>
        </div>
        <div className='col-md-4'>
        <div className="card profilecards">
            <div className="card__details">
            <h3 className='heading'>Profile details <Link to="/"><EditIcon></EditIcon></Link></h3>
            <ul className="list-bullets detail-list">
            <li className="mb-2"><strong className='strlist'>City: </strong> Mumbai</li>
            <li className="mb-2"><strong className='strlist'>State: </strong>Maharashtra</li>
            <li className="mb-2"><strong className='strlist'>Pincode: </strong>400025</li>
            <li className="mb-2"><strong className='strlist'>Email: </strong>vidylankar@vit.edu</li>
            <li className="mb-2"><strong className='strlist'>Phone Number: </strong>9699855120</li>
            <li className="mb-2"><strong className='strlist'>Ammount of Resources: </strong>2</li>
            <li className="mb-2"><strong className='strlist'>Ammount of labs: </strong>3</li>
            <li className="mb-2"><strong className='strlist'>Ammount of Workforce: </strong>3</li>
            </ul>
            </div>
            </div>
        </div>
        <div className='col-md-4'>
        <div className="card profilecards workforce-list">
            <div className="card__details">
            <h3 className='heading'>Workforce</h3>
            <Link to="/wfprofile">
              <article className="leaderboard__profile">
                <span className="leaderboard__name">Ram Verma</span>
              </article>
            </Link>
            <Link to="/wfprofile">
              <article className="leaderboard__profile">
                <span className="leaderboard__name">Shiv Subramanian</span>
              </article>
            </Link>
            <Link to="/wfprofile">
              <article className="leaderboard__profile">
                <span className="leaderboard__name">John Dave</span>
              </article>
            </Link>
            </div>
            </div>
        </div>
      </div>
      </div>
      {/* Resources */}
      <p className='heading res-cards'><h3 className="heading_name">Resources</h3></p>
      <div className="row">
        
          <div className="col-md-4 colvr">
            <div className="card rescard">
              <img src={img1} className="imgres" alt="Equipment Name" />

              {/* <!-- A div with card__details class to hold the details in the card  --> */}
              <div className="card__details">
                {/* <!-- Span with tag class for the tag --> */}
                {/* <span className="tag">Nature</span>

                <span className="tag">Lake</span> */}

                {/* <!-- A div with name class for the name of the card --> */}
                <div className="name">Equipment Name: Microscope</div>
                {/* <span className="discount">Partially Available</span> */}
                <div className="">
                  <ul>
                    {/* <li className="lires boldline">Availability: Partially Available</li> */}
                    <li className="lires">Cost: 1000 Rs/hour</li>
                    <li className="lires">Subject: Physics</li>
                    <li className="lires">Quantity: 30</li>
                  </ul>
                </div>
                 
                <button className="btn-vr"> <Link to='/resdetail/'>Book Now</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center pagination-container">
        {/* <Button variant="text">Show More</Button> */}
        <Pagination count={1} variant="outlined" color="primary" />
        </div>
        {/* Labs  */}
        <p className='heading'><h3 className="heading_name">Labs</h3></p>
        <div className="row">
          <div className="col-md-4 colvr">
            <div className="card rescard">
              <img src={imgres} className="imgres" alt="Equipment Name" />

              {/* <!-- A div with card__details class to hold the details in the card  --> */}
              <div className="card__details">
                {/* <!-- Span with tag class for the tag --> */}
                {/* <span className="tag">Nature</span>

                <span className="tag">Lake</span> */}

                {/* <!-- A div with name class for the name of the card --> */}
                <div className="name">Lab Name: Physics</div>
                {/* <span className="discount">Partially Available</span> */}
                <div className="">
                  <ul>
                    {/* <li className="lires boldline">Availability: Partially Available</li> */}
                    <li className="lires">Timings: 10:00 - 12:00 Hrs</li>
                    <li className="lires">Institute Name: Vidyalankar Institute of Technology</li>
                    <li className="lires">Capacity: 100</li>
                  </ul>
                </div>
                <button className="btn-vr"> <Link to='/labdetail/'>More Details</Link></button>
              </div>
            </div>
          </div>
          <div className="col-md-4 colvr">
            <div className="card rescard">
              <img src={imgres} className="imgres" alt="Equipment Name" />

              {/* <!-- A div with card__details class to hold the details in the card  --> */}
              <div className="card__details">
                {/* <!-- Span with tag class for the tag --> */}
                {/* <span className="tag">Nature</span>

                <span className="tag">Lake</span> */}

                {/* <!-- A div with name class for the name of the card --> */}
                <div className="name">Lab Name: Physics</div>
                {/* <span className="discount">Partially Available</span> */}
                <div className="">
                  <ul>
                    {/* <li className="lires boldline">Availability: Partially Available</li> */}
                    <li className="lires">Timings: 12:00 - 14:00 Hrs</li>
                    <li className="lires">Institute Name: Vidyalankar Institute of Technology</li>
                    <li className="lires">Capacity: 100</li>
                  </ul>
                </div>
                <button className="btn-vr"> <Link to='/labdetail/'>More Details</Link></button>
              </div>
            </div>
          </div>
          <div className="col-md-4 colvr">
            <div className="card rescard">
              <img src={imgres} className="imgres" alt="Equipment Name" />

              {/* <!-- A div with card__details class to hold the details in the card  --> */}
              <div className="card__details">
                {/* <!-- Span with tag class for the tag --> */}
                {/* <span className="tag">Nature</span>

                <span className="tag">Lake</span> */}

                {/* <!-- A div with name class for the name of the card --> */}
                <div className="name">Lab Name: Physics</div>
                {/* <span className="discount">Partially Available</span> */}
                <div className="">
                  <ul>
                    {/* <li className="lires boldline">Availability: Partially Available</li> */}
                    <li className="lires">Timings: 14:00 - 18:00 Hrs</li>
                    <li className="lires">Institute Name: Vidyalankar Institute of Technology</li>
                    <li className="lires">Capacity: 100</li>
                  </ul>
                </div>
                <button className="btn-vr"> <Link to='/labdetail/'>More Details</Link></button>
              </div>
            </div>
          </div>
          
        </div>
        <div className="d-flex justify-content-center pagination-container">
        {/* <Button variant="text">Show More</Button> */}
        <Pagination count={1} variant="outlined"  color="primary" />
        </div>
        <p>
          <br></br>
        </p>
    </div>  
    </>
  )
}
