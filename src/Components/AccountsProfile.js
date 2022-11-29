import React,{useState,useEffect} from 'react';
import "../Css/intituteprofile.css";
import "../Css/wfprofile.css";
import "../Css/accounts_profile.css";
import img from '../Images/user-account.png';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import chem from "../Images/chem-quip.jpg";
import bio from "../Images/images.jpg";
import phy from "../Images/microscope.jpg";
import EditIcon from '@mui/icons-material/Edit';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'; 
import useRazorpay from "react-razorpay";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

export default function AccountsProfile() {
  return (
    <>
    
    <div>
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
                <h1 className="Profile-name">John</h1>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container details-container'>
      <div className='row'>
        <div className='col-md-4'>
        <div className="card profilecards slots">
            <div className="card__details ">
            <h3>Pending Payments</h3>
            <article class="account__profile">
              <span class="">OrderID: 2428</span><br></br>
              <span class="">Cost: Rs 1000</span><br></br>
              <span class="">Selling Institute : VJTI</span>
              <span class=""><button className="btn-vr" onClick="/cart">Pay Now</button></span>
            </article>
         
            </div>
            </div>
        </div>
        <div className='col-md-4'>
        <div className="card profilecards">
            <div className="card__details">
            <h3>Profile details <Link to="/"><EditIcon></EditIcon></Link></h3>
            <ul className="list-bullets detail-list">
              <li className="mb-2"><strong className='strlist'>Department: </strong> Accounts</li>
              <li className="mb-2"><strong className='strlist'>Position: </strong> Accountant</li>
              <li className="mb-2"><strong className='strlist'>Institute: </strong>VJTI</li>
              <li className="mb-2"><strong className='strlist'>Email: </strong>john.shahane@vit.edu.in</li>
              <li className="mb-2"><strong className='strlist'>Phone Number: </strong>9323165165</li>
            </ul>
            </div>
            </div>
        </div>
        <div className='col-md-4'>
        <div className="card profilecards workforce-list">
            <div className="card__details">
            <h3>Payments Done</h3>
            <article class="account__profile">
              <AddCircleOutlineRoundedIcon/>
              <span class="" style={{color: "green",float: "right"}}>Debit</span><br></br>
              <span class="">Payment ID: 256</span><br></br>
              <span class="">Cost: Rs 1000</span><br></br>
              {/* <span class="">Payment Date: {item.datetime_of_payment.split('T')[0]}</span> */}
            </article>
            
            <article class="account__profile">
              <RemoveCircleOutlineRoundedIcon  />
              <span class="" style={{color: "red",float: "right"}}>Credit</span><br></br>
              <span class="">OrderID: 3456</span><br></br>
              <span class="">Cost: Rs 1000</span><br></br>
              {/* <span class="">Payment Date: {item.datetime_of_payment}</span> */}
            </article>

            </div>
            </div>
        </div>
      </div>
      </div>
      
      <p><br></br></p>
    </div>   
    <div></div>
    </div>
    
    </>
  )
}