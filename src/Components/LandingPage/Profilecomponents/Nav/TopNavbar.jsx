  import React, { useEffect, useState } from "react";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
  import PropTypes from 'prop-types';
  import InputLabel from '@mui/material/InputLabel';
  import MenuItem from '@mui/material/MenuItem';

  // import FormControl from '@mui/material/FormControl';
  // import FormControl from '@mui/material/FormControl';
  // // or
  import { FormControl } from '@mui/material';
  import Select from '@mui/material/Select';
  
  // // Assets
  import logo from "../../../../Images/logo.png"
  // import LogoIcon from "../../assets/svg/Logo";
  import BurgerIcon from "../../Profileassets/svg/BurgerIcon";
  
  export default function TopNavbar() {
    const [y, setY] = useState(window.scrollY);
    const [sidebarOpen, toggleSidebar] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => setY(window.scrollY));
      return () => {
        window.removeEventListener("scroll", () => setY(window.scrollY));
      };
    }, [y]);
    const [role, setRole] = React.useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
    // const handleChange = (event) => {
    //   setRole(event.target.value);
    //   sessionStorage.setItem("role_id",event.target.value);
    //   window.location.href = '/login'
    // };
    return (
      <>
        <Wrapper
          className="flexCenter animate whiteBg"
          style={y > 100 ? { height: "60px" } : { height: "80px" }}
        >
          <NavInner className="landing-page-container flexSpaceCenter">
            <Link className="pointer flexNullCenter" to="home" smooth={true}>
              {/* <LogoIcon /> */}

              <Link className="navbar-brand" to="/">
                {/* <img className="logo" src={logo}/> */}
              </Link>
              <h1 style={{ marginLeft: "15px" }} className="font50 extraBold">
                Re-Source
              </h1>
            </Link>
            <BurderWrapper
              className="pointer"
              onClick={() => toggleSidebar(!sidebarOpen)}
            >
              <BurgerIcon />
            </BurderWrapper>
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Home
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Services
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Institutes
                </Link>
              </li>
              {/* <li className="semiBold font15 pointer">
                <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                  Blog
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                  Pricing
                </Link>
              </li> */}
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Contact
                </Link>
              </li>
            </UlWrapper>
            <UlWrapperRight className="flexNullCenter nav-login-btn">
              <li className="semiBold font15 pointer" style={{height: "50px"}}>
              {/* <FormControl sx={{ m: 1, minWidth: 150 }}>
                  <InputLabel id="demo-simple-select-autowidth-label" >Login as</InputLabel>
                  <Select
                    class="btn-profile-login radius8 lightBg"
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={role}
                    
                    autoWidth
                    label="Role"
                  >
                    <MenuItem value="">
                      <em>Select the Role</em>
                    </MenuItem>
                  
                    <MenuItem value={3}   tag={Link} to="/instituteProfile">Institute </MenuItem>
                    <MenuItem value={2}>University</MenuItem>
                    <MenuItem value={1}>UGC</MenuItem>
                    <MenuItem value={8}>Accountant </MenuItem>
                    <MenuItem value={4}>Lab Assistant</MenuItem>
              
                  </Select>
                </FormControl> */}
               <Dropdown isOpen={dropdownOpen} toggle={toggle} style={{padding: "0px"}}>
                  <DropdownToggle caret  style={{background: "transparent",height: "32px",width: "119px",color: "#000",padding: "0px"}}>Login As</DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem tag={Link} to={`/instituteProfile`}>Institute</DropdownItem>
                    <DropdownItem tag={Link} to={`/universityProfile`}>University</DropdownItem>
                    <DropdownItem tag={Link} to={`/ugcStaffProfile`}>UGC Staff</DropdownItem>
                    <DropdownItem tag={Link} to={`/ugcProfile`}>UGC</DropdownItem>
                    <DropdownItem tag={Link} to={`/accountsProfile`}>Accountant</DropdownItem>
                    <DropdownItem tag={Link} to={`/wfprofile`}>Lab  Assistance</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
  
            </UlWrapperRight>
          </NavInner>
        </Wrapper>
      </>
    );
  }
  
  const Wrapper = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  `;
  const NavInner = styled.div`
    position: relative;
    height: 100%;
  `;
  const BurderWrapper = styled.button`
    outline: none;
    border: 0px;
    background-color: transparent;
    height: 100%;
    padding: 0 15px;
    display: none;
    @media (max-width: 760px) {
      display: none;
    }
  `;
  const UlWrapper = styled.ul`
    display: flex;
    @media (max-width: 760px) {
      display: none;
    }
  `;
  const UlWrapperRight = styled.ul`
    @media (max-width: 760px) {
      display: top-center;
    }
  `;