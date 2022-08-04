import React, {useState,Component} from 'react';
// import { useRef } from 'react';
import  Register from '../Images/register.svg';
import Log from '../Images/log.svg';
import "../Css/passwordstrengthmeter.css";
import '../Css/login.css';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha"

export default class LogIn extends Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.state = {signupmode: true};
      this.state = {
        value: 0,
        password: "",
        confirmpassword:"",
        error:"",
      };
      this.handleSignInClick = this.handleSignInClick.bind(this);
      this.handleLogInClick = this.handleLogInClick.bind(this);
    }
    handleSignInClick() {
      this.setState({signupmode: true});
      console.log("set true")
    }
    handleLogInClick(){
        this.setState({signupmode: false});
      }
      updatePasswordvalue = (ev) => {
        this.setState({
          password: ev.target.value,
        });
        this.changeMeterValue();
        console.log("Update pw");
      };
      changeMeterValue = () => {
        const StrongPassword = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
        );
        const MediumPassword = new RegExp(
          "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
        );
        if (this.state.password.length === 1) {
          this.setState({
            value: 0,
          });
        } else {
          if (StrongPassword.test(this.state.password)) {
            this.setState({
              value: 100,
            });
          } else {
            if (MediumPassword.test(this.state.password)) {
              this.setState({
                value: 50,
              });
            } else {
              this.setState({
                value: 10,
              });
            }
          }
        }
      };
      createPasswordLabel = (testedResult) => {
        switch (testedResult) {
          case 0:
            return "Weak";
          case 5:
            return "Weak";
          case 10:
            return "Fair";
          case 50:
            return "Good";
          case 100:
            return "Strong";
          default:
            return "Weak";
        }
      };
      updateConfirmPasswordvalue = (ev) => {
        this.setState({
          confirmpassword: ev.target.value,
        });
        console.log("cp: ",this.state.confirmpassword);
        if (this.state.confirmpassword != this.state.password)
        {
          this.state.error = "Password and Confirm Passwords Do not match"
        }

      };

  render() {
    const issignupclicked = this.state.signupmode  
    var testedResult = this.state.value;
    
    return (
      <>
      <div className={`container container-anime  ${issignupclicked === true  ? 'sign-up-mode' : 'null'}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Log in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email"  placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn btn-primary sign-btn" />
          <Link to={'/'} className="fp">Forgot Password?</Link> 
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Institute Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Institute Email" />
            </div>
            
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
          type="password"
          onChange={this.updatePasswordvalue}
          className="password"
          placeholder="Password"
        />
        </div>
        <div className="password-strength-meter input-field">
          <progress
            className={`password-strength-meter-progress strength-${this.createPasswordLabel(
              testedResult
            )}`}
            value={this.state.value}
            max="100"
          />
          <br />
          <label className="password-strength-meter-label">
            <>
              <strong>Password strength:</strong>{" "}
              {this.createPasswordLabel(testedResult)}
            </>
          </label>
        </div>
              
            
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" value={this.state.confirmpassword}    onChange={this.updateConfirmPasswordvalue} />
              <strong  className="password-strength-meter-label">{this.state.error}</strong>
            </div>
            <div className="input-field captcha d-flex justify-content-center">
            <ReCAPTCHA sitekey='6LczfkchAAAAAJ6wnD7N20LaX0HP_ed18GKZe03o' ref={this.myRef}  />
            </div>
            <input type="submit" className="btn btn-primary sign-btn " value="Sign up" />
            
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Sign In and get started with your journey
            </p>
            <button className="btn sign-btn transparent"   onClick={this.handleSignInClick}  id="sign-up-btn">
              Sign In
            </button>
          </div>
          <img src={Register} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Log In Here
            </p>
            <button className="btn sign-btn transparent"  onClick={this.handleLogInClick} id="log-in-btn">
              Log In 
            </button>
          </div>
          <img src={Log} className="image" alt="" />
        </div>
      </div>
    </div>
      </>
    )
  }
}