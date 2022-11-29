import React,{useState,useEffect} from 'react';
import "../Css/intituteprofile.css";
import img from '../Images/user-account.png';
import { Link } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'; 

export default function UGCProfile() {
  return (
    <>
   <div className='container profile-container'>
   <div className='university-bg-box'>
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
             <h1 className="Profile-name">Mumbai University</h1>
           </p>
         </div>
       </div>
     </div>
   </div>
   <div className='container details-container'>
   <div className='row'>
     <div className='col-md-3'>
     <div className="card profilecards">
         <div className="card__details">
         <h3>Profile details</h3>
         <ul className="list-bullets detail-list">
         <li className="mb-2"><strong className='strlist'>City: </strong> Mumbai </li>
         <li className="mb-2"><strong className='strlist'>State: </strong>Maharashtra</li>
         <li className="mb-2"><strong className='strlist'>Pincode: </strong>400025</li>
         <li className="mb-2"><strong className='strlist'>Email: </strong>mu@gmail.com</li>
         <li className="mb-2"><strong className='strlist'>Phone: </strong>7369872006</li>
           {/* <li className="mb-2"><strong className='strlist'>Ammount of Institutes: </strong>{res.institute_data.length}</li> */}
         </ul>
         </div>
         </div>
     </div>
     <div className='col-md-4'>
     {/* button className='btn btn-primary addstaffbtn' onClick={pendingreq}>Add new Staff<AddCircleRoundedIcon></AddCircleRoundedIcon></button> */}
     <div className="card profilecards workforce-list">
        <div className="card__details">  
          <h3>Approved Universities</h3>  
          <Link to='/viewaccountantprofile'>
          <article class="leaderboard__profile">
            <span class="leaderboard__name">Vidyalankar Institute Of Technology</span>
          </article>
          </Link> 
         </div>
         </div>
     </div>
     
     <div className='col-md-5'>
     
     <div className="card profilecards workforce-list">
         <div className="card__details">
         <button className='btn btn-primary'>Pending Universities<AddCircleRoundedIcon></AddCircleRoundedIcon></button>
        <button className='btn btn-primary addstaffbtn'>Add new Staff<AddCircleRoundedIcon></AddCircleRoundedIcon></button>
        <br />
        <br />        
        <h3>Approved UGC Staffs</h3>
            <a href='/viewaccountantprofile'>
              <article class="leaderboard__profile">
                <span class="leaderboard__name">Ram Swaminarayan</span>
                <span  class="leaderboard__name">Accountant</span>
              </article>
            </a>  
         </div>
         </div>
     </div>
   </div>
   </div>
   
 </div>   
    </>
  )
}
