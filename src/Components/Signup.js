import React, { Component } from 'react';
import '../Css/signup.css';
import Loginsvg from '../Images/signupimg.png';
import { Link } from 'react-router-dom';

export default class Signup extends Component {
  
  render() {
    return (
      <>
       <ul className="cards cards--active d-flex justify-content-center">
          <li className="card card--current">
            {/* <h1 className='title'>ReSource</h1> */}
            <div className='row'>
              <div className='col-lg-6 imgcol'>
                
                <img
					className='svg-img img-fluid'
					src={Loginsvg}
					alt='collab'
				/>
              </div>
              <div className='col-lg-6'>
                <form className='loginform'>
                {/* <h1 className='heading'>Welcome back</h1> */}
                <div className='row'>
                  <div className='col-6 d-flex justify-content-center'>
                    <button className="btn btn-lg  btn-login text-uppercase fw-bold mb-2" type="submit">Google</button>
                  </div>
                  <div className='col-6 d-flex justify-content-center'>
                    <button className="btn btn-lg  btn-login text-uppercase fw-bold mb-2" type="submit">Facebook</button>
                  </div>
                </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  {/* <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div> */}

                  <div className="d-grid">
                    <button className="btn btn-lg  btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                    <div className="text-center">
                      <Link className="small" to="#">New Member?</Link>
                    </div>
                  </div>

                </form>
              </div>
            </div>
  
      
          </li>
          <li className="card card--out">
            <h1>Comment Card 2 </h1>

            <p></p>
          </li>
          <li className="card card--next">
            <h1>Comment Card 3</h1>

            <p></p>

          </li>
        </ul>
      </>
    )
  }
}

