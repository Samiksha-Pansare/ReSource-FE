import React,{useState, useEffect} from "react";
import "../Css/header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png"

export default function Header(role) {
  const roleID = role.roleID;
  console.log("Role ID: ",roleID);
    if (roleID === "1") {
      console.log("Role ID: ",roleID);
      console.log("Role ID: 1")
      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img className="logo" src={logo}/> */}
          </Link>
          <Link className="navbar-brand portalname" to="/">
            Re-Source
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/instituteProfile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut
                  </Link>
              </li>
            </ul>
          
          </div>
          </div>
          </nav>
        </>
      );
    }
    else if (roleID === "2") {
      console.log("Role ID: ",roleID);
      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img className="logo" src={logo}/> */}
          </Link>
          <Link className="navbar-brand portalname" to="/">
            Re-Source
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/universityProfile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instituteList">
                Institutes
              </Link>
            </li>
            <li className="nav-item">
                <button className="btn logoutbtn">
                  <Link className="nav-link" to="/" style={{paddingTop: "0px"}}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut
                  </Link>
                </button>
              </li>
              </ul>
          </div>
          </div>
          </nav>
        </>
      );
    }
    else if (roleID === "3") {
      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img className="logo" src={logo}/> */}
          </Link>
          <Link className="navbar-brand portalname" to="/">
            Re-Source
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/ugcProfile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
                <button className="btn logoutbtn">
                
                  <i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut
                </button>
              </li>
              </ul>
          </div>
          </div>
          </nav>
        </>
      );
    }
    else if (roleID === "4") {
      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img className="logo" src={logo}/> */}
          </Link>
          <Link className="navbar-brand portalname" to="/">
            Re-Source
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/ugcStaffProfile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
                  <Link className="nav-link" to="/" style={{paddingTop: "8px"}}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut
                  </Link>
              </li>
              </ul>
          </div>
          </div>
          </nav>
        </>
      );
    }
    else if (roleID === "5") {
      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img className="logo" src={logo}/> */}
          </Link>
          <Link className="navbar-brand portalname" to="/">
            Re-Source
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/accountsProfile/">
                Profile
              </Link>
            </li>
            <li className="nav-item">
                  <Link className="nav-link" to="/" style={{paddingTop: "8px"}}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut
                  </Link>
              </li>
              </ul>
          </div>
          </div>
          </nav>
        </>
      );
    }
    else if (roleID === "6") {
      return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {/* <img className="logo" src={logo}/> */}
          </Link>
          <Link className="navbar-brand portalname" to="/">
            Re-Source
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Home
                  </Link>
                  
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/wfprofile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewres">
                  All Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/" style={{paddingTop: "8px"}}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut
                  </Link>
                </li>
                </ul>
          </div>
          </div>
          </nav>
        </>
      );
    }
    else {
      return (
        <>
          {/* <!-- Navigation --> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                {/* <img className="logo" src={logo}/> */}
              </Link>
              <Link className="navbar-brand portalname" to="/">
                Re-Source
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">                
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home def
                    </Link>
                    
                  </li>
                  <li className="nav-item">
                  {/* <Link className="nav-link" to="/wfprofile">
                    Profile
                  </Link> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/" >
                    <i class="fa fa-sign-out" aria-hidden="true"></i>  LogOut
                  </Link>
                  </li>
                  </ul>
                <div></div>
                
              </div>
            </div>
          </nav>
        </>
      );
    }
  
}
